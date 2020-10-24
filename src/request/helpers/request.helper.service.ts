import { Injectable , HttpException , HttpStatus } from '@nestjs/common';
import { CategoryService } from '../../category/category.service';
import { TutorService } from '../../tutor/tutor.service';
import { RequestService } from '../request.service'
import { UserService } from '../../user/user.service'
import { Tutor } from '../../tutor/tutor.entity'
import { Category } from '../../category/category.entity'
import { stringType } from 'aws-sdk/clients/iam'
import { User } from '../../user/user.entity'
import { SessionService } from '../../session/session.service'
import { Session } from '../../session/session.entity'

@Injectable()
export class RequestHelperService {
    constructor(
        private requestService : RequestService,
        private categoryService : CategoryService,
        private tutorService : TutorService,
        private userService : UserService,
        private sessionService : SessionService
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
            const requestRespondResults = await this.requestService.respondRequest({tutor, id} , isAccepted)
            if(!isAccepted){
                //if the request is declined, only the request gets changed
                return await requestRespondResults
            }else{

                //If the request is accepted, a new session gets created with some of the info from the request
                const createSession = await this.createSession({id})
                return (await createSession) && await requestRespondResults   
            }
        }else{
            throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
        }
    }

    async createSession(condition : {id : number}) {

        //Gets the associated request with all of its relations
        const request = await this.requestService.getRequest(condition)

        //This probably needs to be calculated in a helper inside the Session Module
        const rate = (request.duration / 3600 ) * await request.tutor.hourlyRate;
        

        const newSession = {
            startTime : request.startTime,
            duration : request.duration,
            category : request.category,
            tutor : request.tutor,
            rate :  rate
        }

        //Creates a session from the accepted request
        return (await request) && this.sessionService.createSession(newSession)
    }

       
}
