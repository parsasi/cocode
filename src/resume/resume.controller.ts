import { Controller , Post , UseGuards , Body , Request } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ResumeService } from './resume.service'
import { CreateResumeDto } from './dto/createResumeDto'


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
}
