import { Controller , Post , UseGuards , Body , Request , Delete , Response, HttpStatus } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ResumeService } from './resume.service'
import { CreateResumeDto } from './dto/createResumeDto'
import { DeleteResumeDto } from './dto/deleteResumeDto'


@Controller('resume')
export class ResumeController {
    constructor(
        private resumeService : ResumeService
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

        //If the item does not exist or if the item doesn't belong to the tutor logged-in, deleteResult.affected will carry a 0 value
        return deleteResult.affected > 0 ? res.status(HttpStatus.OK).send() : res.status(HttpStatus.NOT_FOUND).send()
    }
}
