import { Controller , Put , Get , Request , UseGuards , Body , HttpStatus , Response , Query, HttpException } from '@nestjs/common'
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



    
    //Gets the info for a session, for its user or tutor
    //Adds the property isTutor to the result to let the frontend know if the logged-in user should have tutor authorization
    @UseGuards(JwtAuthGuard)
    @Get('/')
    async getSession(@Query() getSessionDto : GetSessionDto , @Request() req){
        //By default user does not have a tutor authorization
        let isTutor = false

        //Looks for a session with the uuid and associated with a user with that username
        let result =  await this.sessionService.getSessionWithUser({uuid : getSessionDto.uuid , username : req.user.username})
        
        //If the session is not found, looks for sessions that have the user as a tutor
        if(!result){
            result = await this.sessionService.getSessionWithTutor({uuid : getSessionDto.uuid , username : req.user.username})
            isTutor = true
        }


        if(!result){
            throw new HttpException('UNAUTHORIZED' , HttpStatus.UNAUTHORIZED)
        }

        return {...result , isTutor}
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
    @Get('/tutor')
    async getTutorSession(@Request() req){
        return await this.sessionService.getTutorSession({username : req.user.username})
    }

}
