import { Controller, Post, UseGuards, HttpStatus , Body , Request , Put } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { CreateRequestDto } from './dto/createRequestDto'
import { RequestHelperService } from './helpers/request.helper.service'
import { RequestService } from './request.service'
import { ResponseRequestDto } from './dto/responseRequestDto'

@Controller('request')
export class RequestController {
    constructor(
        private requestHelperService : RequestHelperService,
        private requestService : RequestService 
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
    async respondRequest(@Body() responseRequestDto : ResponseRequestDto, @Request() req){
        return await this.requestHelperService.respondRequest(responseRequestDto.isAccepted , responseRequestDto.id , req.user.username)
    }

}
