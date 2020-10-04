import { Controller  , Post , Body } from '@nestjs/common';
import {UserService} from './user.service'
import { CreateUserDto } from './dto/createUserDto'
import { Console } from 'console';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){}

    @Post('/create')
    async createUser(@Body() createUserDto : CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

}
