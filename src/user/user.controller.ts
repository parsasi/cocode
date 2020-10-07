import { Controller  , Post , Body, Get, Query , UseGuards , Request , HttpStatus , Res, Put} from '@nestjs/common';
import { Response } from 'express'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/createUserDto'
import { UserExistsUsernameDto , UserExistsEmailDto } from './dto/userExistsDto'
import { User } from './user.entity'
import { TutorService } from './tutor.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { EditUserDto } from './dto/editUserDto'

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
    async createTutor(@Request() req , @Res() res: Response){
        //fetching the user associated with the tutor
        const user : User | void = await this.userService.getUserByUsername(req.user.username)
        if(user){
            return await this.tutorService.createTutor(user)
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send()
    }

    @UseGuards(JwtAuthGuard)
    @Put('/')
    async editUser(@Body() editUserDto : EditUserDto ,  @Request() req , @Res() res : Response){
        const userUpdate =  await this.userService.editUser(editUserDto , req.user.sub)

        return userUpdate ? res.status(HttpStatus.OK).send() : res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }
    
}
