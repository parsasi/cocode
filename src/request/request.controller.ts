import { Controller, Post, UseGuards, HttpStatus , Body , Request , Put , Response, Get } from '@nestjs/common';
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
            createRequestDto.description,
            req.user.username,
        )
    }

    @UseGuards(JwtAuthGuard)
    @Put('/respond')
    async respondRequest(@Body() responseRequestDto : ResponseRequestDto, @Request() req , @Response() res){
        
        //Changes the respond record in the database
        //If the request is accepted, a new session gets created as well
        const requestRespondResult =  await this.requestHelperService.respondRequest(responseRequestDto.isAccepted , responseRequestDto.id , req.user.username)

        return await requestRespondResult && res.status(HttpStatus.OK).send()

    }

    @UseGuards(JwtAuthGuard)
    @Get('/user')
    async getUserRequest(@Request() req){
        return await this.requestService.getUserRequest({username : req.user.username})
    }

    @UseGuards(JwtAuthGuard)
    @Get('/tutor')
    async getTutorRequest(@Request() req){
        return await this.requestService.getTutorRequest({username : req.user.username})
    }



}
