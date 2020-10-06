import { Controller  , Post , Body, Get, Query , UseGuards , Request , HttpStatus } from '@nestjs/common';
import { UserService } from './user.service'
import { CreateUserDto } from './dto/createUserDto'
import { UserExistsUsernameDto , UserExistsEmailDto } from './dto/userExistsDto'
import { User } from './user.entity'
import { TutorService } from './tutor.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Controller('user')
export class UserController {
    constructor(
        private userService : UserService,
        private tutorService : TutorService
    ){}

    @Post('/create')
    async createUser(@Body() createUserDto : CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

    @Get('/exists')
    async userExists(@Query() userExistsDto : UserExistsUsernameDto | UserExistsEmailDto){
        let user : User | void;
        if('username' in userExistsDto)
            user = await this.userService.getUserByUsername(userExistsDto.username)
        else
            user = await this.userService.getUserByEmail(userExistsDto.email)
        
        return user ? {exists : true} : {exists : false}
    }

    @UseGuards(JwtAuthGuard)
    @Post('/tutor/create')
    async createTutor(@Request() req){
        const user : User | void = await this.userService.getUserByUsername(req.user.username)
        return user ? await this.tutorService.createTutor(user) : HttpStatus.NOT_FOUND
    }
    
}
