import { Controller  , Post , Body, Get, Query , UseGuards , Request , HttpStatus , Res, Put , UploadedFile , UseInterceptors , forwardRef, Inject  } from '@nestjs/common';
import { Response } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/createUserDto'
import { UserExistsUsernameDto , UserExistsEmailDto } from './dto/userExistsDto'
import { User } from './user.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { EditUserDto } from './dto/editUserDto'
import { AwsS3Service } from '../aws-s3/aws-s3.service'
import { VerifyFile , ModifyFile } from './helpers/profile-photo-filter.helper'
import { GetUserPhotoDto } from './dto/getUserPhotoDto'
import { ProfilePhotoHelperService } from './helpers/profile-photo.helper.service'

@Controller('user')
export class UserController {
    constructor(
        private userService : UserService,
        private awsS3Service : AwsS3Service,
        private profilePhotoHelperService : ProfilePhotoHelperService
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

        file = ModifyFile(file)

        const bucket = await this.awsS3Service.getBucket('cocode-profile')
        
        const uploadParams = {
            Bucket : bucket.Name,
            Body : file.buffer,
            Key : file.originalname, //Generated uuid inside ModifyFile
        }

        const uploadedFile = await this.awsS3Service.upload(uploadParams)

        const userUpdate = await this.userService.updateUserPhoto(uploadedFile.Key , req.user.sub)
        
        return userUpdate ? res.status(HttpStatus.OK).send() : res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();

    }

    @Get('/photo')
    async getProfilePhoto(@Query() getUserPhotoDto : GetUserPhotoDto){
        const userPhotoKey = await this.userService.getUserPhoto(getUserPhotoDto.username)
        

        const preSignedUrl = await this.profilePhotoHelperService.getProfilePhoto(userPhotoKey)

        return {url : preSignedUrl}
    }   

    // @Get('/')
    // async getProfile()
}
