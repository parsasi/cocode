import { Injectable , HttpException , HttpStatus } from '@nestjs/common';
import { Repository , InsertResult} from 'typeorm';
import { InjectRepository  } from '@nestjs/typeorm'
import { Request } from './request.entity'
import { User } from '../user/user.entity'
import { Tutor } from '../tutor/tutor.entity'
import { Category } from '../category/category.entity'

interface respondRequestServiceDto{
    tutor : Tutor
    id : number
}

interface createRequestServiceDto{
    tutor : Tutor,
    category : Category,
    user : User,
    startTime : Date,
    duration : number
}

@Injectable()
export class RequestService {
    constructor(
        @InjectRepository(Request)
        private requestRepository : Repository<Request>,
    ){}

    async createRequest(request : createRequestServiceDto) : Promise<InsertResult> {
        return await this.requestRepository.insert(request)
    }

    async getRequest(condition) : Promise<Request> {
        // return await this.requestRepository.findOne(condition)

        return await this.requestRepository
        .createQueryBuilder("request")
        .leftJoinAndSelect("request.tutor", "tutor")
        .leftJoinAndSelect("request.user", "user")
        .leftJoinAndSelect("request.category", "category")
        .getOne()
    }


    async respondRequest(condition : respondRequestServiceDto , isAccepted : boolean) : Promise<Request> {
        
        //Looking for a request with the given ID and with the tutor who is logged in
        //This is to make sure that tutors can only respond to their own requests        
        let request = await this.requestRepository.findOne(condition);
        
        if(!request){
            throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
        }
        else if(request.isClosed){
            throw new HttpException("Request already closed", HttpStatus.METHOD_NOT_ALLOWED);
        }

        request = {...request , isAccepted , isClosed : true}

        return await this.requestRepository.save(request);

    }
}
