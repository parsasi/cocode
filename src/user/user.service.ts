import { Injectable } from '@nestjs/common';
import { InjectRepository  } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { User } from './user.entity'
import {InsertResult} from 'typeorm' 
import {BcryptService} from '../bcrypt/bcrypt.service'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>,
        private bcryptService : BcryptService
    ){}

    async createUser(user) : Promise<InsertResult | void> {
        const hashedPassword = await this.bcryptService.hash(user.hashedPassword);
        const newUser = {...user , hashedPassword} 
        return this.userRepository.insert(newUser);
    }
}
