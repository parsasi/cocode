import { Injectable } from '@nestjs/common';
import { InjectRepository  } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { User } from './user.entity'
import {InsertResult} from 'typeorm' 

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>
    ){}

    createUser(user) : Promise<InsertResult | void> {
        return this.userRepository.insert(user);
    }
}
