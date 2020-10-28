import { Controller , Put , Request , UseGuards , Body , HttpStatus , Response } from '@nestjs/common'
import { SessionService } from './session.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { StartSessionDto } from './dto/statrSessionDto'
import { EndSessionDto } from './dto/endSessionDto'
import { TutorService } from '../tutor/tutor.service'

@Controller('session')
export class SessionController {
    constructor(
        private sessionService : SessionService,
        private tutorService : TutorService
    ){}

    // /start and /end could have been combined into one endpoint, but implementation details are going to be different later

    
    @UseGuards(JwtAuthGuard)
    @Put('/start')
    async startSession(@Body() sessionStartDto : StartSessionDto , @Request() req , @Response() res){
        
        const tutor = await this.tutorService.getTutorUsernameSearch({username : req.user.username})
       
        const startResult = await this.sessionService.startSession({uuid : sessionStartDto.uuid , tutor})

        return (await startResult) && res.status(HttpStatus.OK).send()
    }

    @UseGuards(JwtAuthGuard)
    @Put('/end')
    async endSession(@Body() sessionStartDto : EndSessionDto , @Request() req , @Response() res){
        
        const tutor = await this.tutorService.getTutorUsernameSearch({username : req.user.username})
       
        const endResult = await this.sessionService.endSession({uuid : sessionStartDto.uuid , tutor})

        return (await endResult) && res.status(HttpStatus.OK).send()
    }

}
