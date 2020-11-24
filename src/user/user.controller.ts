import { Controller  , Post , Body, Get, Query , UseGuards , Request , HttpStatus , Res, Put , UploadedFile , UseInterceptors} from '@nestjs/common';
import { Response } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/createUserDto'
import { UserExistsUsernameDto , UserExistsEmailDto } from './dto/userExistsDto'
import { User } from './user.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { EditUserDto } from './dto/editUserDto'
import { VerifyFile } from './helpers/profile-photo-filter.helper'
import { GetUserPhotoDto } from './dto/getUserPhotoDto'
import { ProfilePhotoHelperService } from './helpers/profile-photo.helper.service'
import { GetUserDto } from './dto/getUserDto'


@Controller('user')
export class UserController {
    constructor(
        private userService : UserService,
        private profilePhotoHelperService : ProfilePhotoHelperService
    ){}

    @Post('/create')
    async createUser(@Body() createUserDto : CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

    @Get('/exists')
    async userExists(@Query() userExistsDto : UserExistsUsernameDto | UserExistsEmailDto){
        let user : User;
        if('username' in userExistsDto)
            user = await this.userService.getUserByUsername(userExistsDto.username)
        else
            user = await this.userService.getUserByEmail(userExistsDto.email)
        
        return user ? {exists : true} : {exists : false}
    }

    @UseGuards(JwtAuthGuard)
    @Put('/')
    async editUser(@Body() editUserDto : EditUserDto ,  @Request() req , @Res() res : Response){
        const userUpdate =  await this.userService.editUser(editUserDto , req.user.sub)

        return userUpdate ? res.status(HttpStatus.OK).send() : res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }


    @Put('/photo')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('file' , {limits : {fileSize : 2000000} , fileFilter : VerifyFile})) 
    async updateProfilePhoto(@UploadedFile() file , @Res() res : Response ,  @Request() req){
        
        //If the file is not valid, it will be undefiend
        if(!file){
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send()
        }

        //Uploades the photo to AWS S3 and retuns an object containing the key
        const uploadedFile = await this.profilePhotoHelperService.uploadProfilePhoto(file)

        //Updates users' profile to add the key from AWS S3 to 
        const userUpdate = await this.userService.updateUserPhoto(uploadedFile.Key , req.user.sub)
        
        return userUpdate ? res.status(HttpStatus.OK).send() : res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();

    }

    @Get('/photo')
    async getProfilePhoto(@Query() getUserPhotoDto : GetUserPhotoDto){
        const userPhotoKey = await this.userService.getUserPhoto(getUserPhotoDto.username)

        const preSignedUrl = await this.profilePhotoHelperService.getProfilePhoto(userPhotoKey)

        return {url : preSignedUrl}
    }   

    @Get('/')
    @UseGuards(JwtAuthGuard)
    async getProfile(@Query() getUserDto : GetUserDto  , @Request() req){
        if('username' in getUserDto){
            //If the username is passed, return the data for the username passed in
            return await this.userService.getUser(getUserDto)
        }else{
            //If the username is not passed, return the data for the user that's authenticated
            return  await this.userService.getUser({username : req.user.username})
        }
    }
}
