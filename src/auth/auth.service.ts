import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service'
import { BcryptService } from '../bcrypt/bcrypt.service'
import { JwtService } from '@nestjs/jwt'


@Injectable()
export class AuthService {
    constructor(
        private userService : UserService,
        private bcryptService : BcryptService,
        private jwtService : JwtService,
        ){}

    async authenticate(email : string , password : string) : Promise<any> {
        const user = await this.userService.getUserByEmailLogin(email)
        if(user){
            if(await this.bcryptService.BcryptCompare(password , user.hashedPassword)){
                delete user.hashedPassword
                return user
            }
        }
        return null
    }

    async login(user: any) {
        const payload = {...user , sub : user.id};
        return {
          access_token: this.jwtService.sign(payload),
        };
    }
}
