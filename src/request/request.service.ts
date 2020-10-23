import { Injectable , HttpException , HttpStatus } from '@nestjs/common';
import { Repository , InsertResult} from 'typeorm';
import { InjectRepository  } from '@nestjs/typeorm'
import { Request } from './request.entity'
import { User } from '../user/user.entity'
import { Tutor } from '../tutor/tutor.entity'
import { Category } from '../category/category.entity'

@Injectable()
export class RequestService {
    constructor(
        @InjectRepository(Request)
        private requestRepository : Repository<Request>,
    ){}

    async createRequest(request : {tutor : Tutor , category : Category , user : User , startTime : Date , duration : number}) : Promise<InsertResult> {
        return await this.requestRepository.insert(request)
    }

    async getRequest(condition) : Promise<Request> {
        return await this.requestRepository.findOne(condition)
    }

    async respondRequest(condition : {tutor : Tutor , id : number} , isAccepted : boolean) : Promise<Request> {
        
        //Looking for a request with the given ID and with the tutor who is logged in
        //This is to make sure that tutors can only respond to their own requests        
        let request = await this.requestRepository.findOne(condition);
        
        if(!request){
            throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
        }
        if(request.isClosed){
            throw new HttpException("Request already closed", HttpStatus.METHOD_NOT_ALLOWED);
        }

        request = {...request , isAccepted , isClosed : true}

        return await this.requestRepository.save(request);




    }
    // const userToUpdate  = await this.userRepository.findOne({id})
    //     user = {...userToUpdate , ...user}
    //     return await this.userRepository.save(user)

}
