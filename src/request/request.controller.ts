import { Controller, Post, UseGuards, HttpStatus , Body , Request , Put , Response } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { CreateRequestDto } from './dto/createRequestDto'
import { RequestHelperService } from './helpers/request.helper.service'
import { RequestService } from './request.service'
import { ResponseRequestDto } from './dto/responseRequestDto'
import { SessionService } from '../session/session.service'

@Controller('request')
export class RequestController {
    constructor(
        private requestHelperService : RequestHelperService,
        private requestService : RequestService,
        private sessionService : SessionService
    ){}

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async createRequest(@Body() createRequestDto : CreateRequestDto , @Request() req){
        return await this
        .requestHelperService
        .sendRequest(
            createRequestDto.username,
            createRequestDto.category,
            createRequestDto.startTime,
            createRequestDto.duration,
            req.user.username,
        )
    }

    @UseGuards(JwtAuthGuard)
    @Put('/respond')
    async respondRequest(@Body() responseRequestDto : ResponseRequestDto, @Request() req , @Response() res){
        const requestRespondResult =  await this.requestHelperService.respondRequest(responseRequestDto.isAccepted , responseRequestDto.id , req.user.username)
        if(responseRequestDto.isAccepted){
            const request = await requestRespondResult && await this.requestService.getRequest({id : responseRequestDto.id})
            const session = {
                startTime : request.startTime,
                duration : request.duration,
                
            }
            // this.sessionService.createSession()

        }else{
            return await requestRespondResult && res.send(HttpStatus.OK)
        }
    }

}
