import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service'
import { BcryptService } from '../bcrypt/bcrypt.service'

@Injectable()
export class AuthService {
    constructor(
        private userService : UserService,
        private bcryptService : BcryptService
        ){}

    async authenticate(email : string , password : string) : Promise<any> {
        const user = await this.userService.getUserByEmail(email)
        if(await this.bcryptService.BcryptCompare(password , user.hashedPassword)){
            delete user.hashedPassword
            return user
        }
        return null
    }
}
