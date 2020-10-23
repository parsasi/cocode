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


    aysnc responseRequest(isAccepted : boolean , id : number , userUsername : string){
        // Finding the tutor associated with the logged-in user
        const tutor : Tutor = await this.tutorService.getTutorUsernameSearch({username : userUsername})
        
        if(tutor){
            //Looking for a request with the given ID and with the tutor who is logged in
            //This is to make sure that tutors can only respond to their own requests
            const request = await this.requestService.getRequest({id  , tutor})

            if(request){
                request.isAccepted = isAccepted
                request.isClosed = true

                //If it's not accepted, the request gets save
                if(!isAccepted){
                    
                }else{

                }

            }else{
                throw new HttpException("Unauthorized Tutor", HttpStatus.UNAUTHORIZED);
            }
        }else{
            throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
        }
    }

       
}
