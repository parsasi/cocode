import { Controller , Put , Get , Request , UseGuards , Body , HttpStatus , Response , Query } from '@nestjs/common'
import { SessionService } from './session.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { StartSessionDto } from './dto/statrSessionDto'
import { EndSessionDto } from './dto/endSessionDto'
import { TutorService } from '../tutor/tutor.service'
import { GetSessionDto } from './dto/getSessionDto'


@Controller('session')
export class SessionController {
    constructor(
        private sessionService : SessionService,
        private tutorService : TutorService
    ){}



    //Gets session(s) of a user
    //providing uuid of a session will return that one specific session
    @UseGuards(JwtAuthGuard)
    @Get('/')
    async getSession(@Query() getSessionDto : GetSessionDto , @Request() req){
        if(getSessionDto.uuid)
            return await this.sessionService.getSessionWithUser({uuid : getSessionDto.uuid , username : req.user.username})
        else
            return await this.sessionService.getSessionsWithUser({username : req.user.username})

    }


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

    @UseGuards(JwtAuthGuard)
    @Get('/user')
    async getTutorSession(@Request() req){
        return await this.sessionService.getTutorSession({username : req.user.username})
    }

}
