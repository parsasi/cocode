import { Controller , Post , UseGuards , Body , Request , Delete , Response, HttpStatus, Put, Get } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ResumeService } from './resume.service'
import { CreateResumeDto } from './dto/createResumeDto'
import { DeleteResumeDto } from './dto/deleteResumeDto'
import { UpdateResumeDto } from './dto/updateResumeDto'
import { GetTutorResumeDto } from './dto/getTutorResumeDto'

@Controller('resume')
export class ResumeController {
    constructor(
        private resumeService : ResumeService,
    ){}


    @Post('/')
    @UseGuards(JwtAuthGuard)
    async createResume(@Body() createResumeDto : CreateResumeDto , @Request() req){
        return await this.resumeService.addResumeItem(createResumeDto , req.user.username)
    }

    @Delete('/')
    @UseGuards(JwtAuthGuard)
    async deleteResume(@Body() deleteResumeDto : DeleteResumeDto , @Request() req , @Response() res){ 
        const deleteResult = await this.resumeService.deleteResumeItem({id : deleteResumeDto.id }, req.user.username)

        //If the item does not exist or if the item doesn't belong to the tutor logged-in, the length of delete result will be 0
        return deleteResult.length ? res.status(HttpStatus.OK).send() : res.status(HttpStatus.NOT_FOUND).send()
    }

    @Put('/')
    @UseGuards(JwtAuthGuard)
    async updateResume(@Body() updateResumeDto : UpdateResumeDto , @Request() req){
        return await this.resumeService.updateResumeItem(updateResumeDto , req.user.username)
    }

    @Get('/tutor')
    @UseGuards(JwtAuthGuard)
    async getTutorResume(@Body() getTutorResumeDto : GetTutorResumeDto){
        return await this.resumeService.getTutorResume({username : getTutorResumeDto.username})
    }

}
