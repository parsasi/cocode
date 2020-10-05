import { Controller  , Post , Body, Get, Query , HttpStatus } from '@nestjs/common';
import {UserService} from './user.service'
import { CreateUserDto } from './dto/createUserDto'
import { UserExistsDto } from './dto/userExistsDto'


@Controller('user')
export class UserController {
    constructor(private userService : UserService){}

    @Post('/create')
    async createUser(@Body() createUserDto : CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

    @Get('/exists')
    async userWithUsernameExist(@Query() userExistsDto : UserExistsDto){
        const user = this.userService.getUserByUsername(userExistsDto.username)
        if(user)
            //User found
            return HttpStatus.OK
        else
            //User not found
            return HttpStatus.I_AM_A_TEAPOT
    }
    
}
