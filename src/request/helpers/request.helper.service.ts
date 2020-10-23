import { Injectable , HttpException , HttpStatus } from '@nestjs/common';
import { CategoryService } from '../../category/category.service';
import { TutorService } from '../../tutor/tutor.service';
import { RequestService } from '../request.service'
import { UserService } from '../../user/user.service'
import { Tutor } from '../../tutor/tutor.entity'
import { Category } from '../../category/category.entity'
import { stringType } from 'aws-sdk/clients/iam'
import { User } from '../../user/user.entity'

@Injectable()
export class RequestHelperService {
    constructor(
        private requestService : RequestService,
        private categoryService : CategoryService,
        private tutorService : TutorService,
        private userService : UserService
    ){}
    
    async sendRequest(username : string , categoryText : string , startTime : string | Date , duration : number , userUsername : stringType){
        
        //Getting tutor for the given username
        const tutor : Tutor = await this.tutorService.getTutorUsernameSearch({username : username});

        //Getting the category based on the category text
        const category : Category = await this.categoryService.getCategoryWithText({text : categoryText})

        //Getting the User based on the user who is logged in
        const user : User | void = await this.userService.getUserByUsername(userUsername)

        startTime = new Date(new Date(startTime).toUTCString())
        

        if(tutor && category && user){
            return await this.requestService.createRequest({tutor , category , user , startTime , duration})
        }else{
            throw new HttpException("Invalid Input", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    async respondRequest(isAccepted : boolean , id : number , userUsername : string){
        // Finding the tutor associated with the logged-in user
        const tutor : Tutor = await this.tutorService.getTutorUsernameSearch({username : userUsername})
        
        if(tutor){
            //changes isAccepted in the targeted request
            const requestRespondResults = await this.requestService.respondRequest({tutor , id} , isAccepted)
            if(!isAccepted){
                return await requestRespondResults
            }else{
                return await requestRespondResults   
            }
        }else{
            throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
        }
    }

       
}
