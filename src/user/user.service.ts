import { Injectable , HttpException , HttpStatus } from '@nestjs/common';
import { InjectRepository  } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { User } from './user.entity'
import { InsertResult } from 'typeorm' 
import { BcryptService } from '../bcrypt/bcrypt.service'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>,
        private bcryptService : BcryptService
    ){}

    async createUser(user) : Promise<InsertResult> {
        const hashedPassword = await this.bcryptService.hash(user.password)
        delete user.password
        const newUser = {...user , hashedPassword} 
        return this.userRepository.insert(newUser)
    }

    async getUserByEmail(email : string) : Promise<User>{
        const user = await this.userRepository.findOne({email})
        if(user)
            return user
        else
            new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
    }
}
