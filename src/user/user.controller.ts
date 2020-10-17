import { Controller  , Post , Body, Get, Query , UseGuards , Request , HttpStatus , Res, Put , UploadedFile , UseInterceptors  } from '@nestjs/common';
import { Response } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/createUserDto'
import { UserExistsUsernameDto , UserExistsEmailDto } from './dto/userExistsDto'
import { User } from './user.entity'
import { TutorService } from './tutor.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { EditUserDto } from './dto/editUserDto'
import { AwsS3Service } from '../aws-s3/aws-s3.service'
import { VerifyFile , ModifyFile } from './helpers/ProfilePhotoFilter'
import { GetUserPhotoDto } from './dto/getUserPhotoDto'
import { GetTutoUsernamerDto , GetTutorCategoryDto } from './dto/getTutorDto'
import { Tutor } from './tutor.entity'

@Controller('user')
export class UserController {
    constructor(
        private userService : UserService,
        private tutorService : TutorService,
        private awsS3Service : AwsS3Service,
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
        
        const bucket = await this.awsS3Service.getBucket('cocode-profile')
        
        const donwloadParams = {
            Bucket : bucket.Name,
            Key : userPhotoKey,
        }

        const preSignedUrl = await this.awsS3Service.getPresignedUrl(donwloadParams)

        return {url : preSignedUrl}
    }

    @Get('/tutor/search')
    async getTutor(@Query() getTutorDto :  GetTutorCategoryDto | GetTutoUsernamerDto){
        let tutors;
        if('username' in getTutorDto){
            // const user = await this.userService.getUserByUsername(getTutorDto.username)
            tutors = await this.userService.getUserAndTutorByUsername({username : getTutorDto.username})
        }else{
            tutors = await this.tutorService.getTutors({categories : [getTutorDto.category]})
        }   
        return tutors
    }

}
