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


}
