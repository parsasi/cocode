import { Controller, Post, UseGuards, HttpStatus , Body , Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { CreateRequestDto } from './dto/createRequestDto'
import { RequestHelperService } from './helpers/request.helper.service'
import { RequestService } from './request.service'

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
            req.user.username
        )
    }

}
