import { Controller  , Post , Body, Get, Query , UseGuards , Request , HttpStatus , Res , Inject , forwardRef, Put , UseInterceptors , UploadedFile } from '@nestjs/common';
import { UserService } from '../user/user.service'
import { Response } from 'express'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { User } from '../user/user.entity'
import { TutorService } from './tutor.service'
import { GetTutoUsernamerDto , GetTutorCategoryDto } from './dto/getTutorDto'
import { CategoryService } from '../category/category.service'
import { TutorSearchHelperService } from './helpers/tutor-search.helper.service'
import { Tutor } from './tutor.entity'
import { EditTutorDto } from './dto/editTutorDto'
import { GetTutorVideoDto } from './dto/getTutorVideoDto'
import { AwsS3Service } from '../aws-s3/aws-s3.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { VerifyFile , ModifyFile } from './helpers/profile-video-filter.helper'

@Controller('tutor')
export class TutorController {
    constructor(
        @Inject(forwardRef(() => UserService))
        private userService : UserService,
        private tutorService : TutorService,
        private categoryService : CategoryService,
        private tutorSearchHelperService : TutorSearchHelperService,
        private awsS3Service : AwsS3Service 
    ){}
    
    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async createTutor(@Request() req , @Res() res: Response){
        //fetching the user associated with the tutor
        const user : User | void = await this.userService.getUserByUsername(req.user.username)
        if(user){
            const insertResults = await this.tutorService.createTutor(user)
            return await insertResults && res.status(HttpStatus.CREATED).send()
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send()
    }

    @Get('/search')
    async getTutor(@Query() getTutorDto :  GetTutorCategoryDto | GetTutoUsernamerDto) : Promise<Tutor[] | User[]>{
        if('username' in getTutorDto){
            return await this.tutorService.getTutorsUsernameSearch({username : getTutorDto.username})
        }else{
            const categories = await this.categoryService.getCategoryForSearch(getTutorDto.category)
            return await this.tutorSearchHelperService.searchTutorWithCategory(categories)
        }   
    }

    @UseGuards(JwtAuthGuard)
    @Put('edit')
    async editTutor(@Body() editTutorDto : EditTutorDto , @Request() req){
        return this.tutorService.editTutor(editTutorDto , req.user.username)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/video')
    @UseInterceptors(FileInterceptor('file' , {limits : {fileSize : 2000000} , fileFilter : VerifyFile})) 
    async editTutorVideo(@UploadedFile() file , @Res() res : Response ,  @Request() req){
        console.log('here')
         //If the file is not valid, it will be undefiend
         if(!file){
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send()
        }

        file = ModifyFile(file)

        const bucket = await this.awsS3Service.getBucket('cocode-tutor')

        const uploadParams = {
            Bucket : bucket.Name,
            Body : file.buffer,
            Key : file.originalname, //Generated uuid inside ModifyFile
        }

        const uploadedFile = await this.awsS3Service.upload(uploadParams)

        const updateTutor = await this.tutorService.updateTutorVideo(uploadedFile.Key , req.user.username)
        
        return updateTutor ? res.status(HttpStatus.OK).send() : res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();

    }

    @UseGuards(JwtAuthGuard)
    @Get('/video')
    async getTutorVideo(@Query() getTutorVideoDto : GetTutorVideoDto , @Res() res : Response){
        const tutor = await this.tutorService.getTutorUsernameSearch({username : getTutorVideoDto.username})
        
        if(!tutor.profileVideo){
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        

        const tutorVideo = tutor.profileVideo;

        const bucket = await this.awsS3Service.getBucket('cocode-tutor')


        const donwloadParams = {
            Bucket : bucket.Name,
            Key : tutorVideo,
        }
        
        const preSignedUrl = await this.awsS3Service.getPresignedUrl(donwloadParams)

        return res.send({url : preSignedUrl})

    }

}
