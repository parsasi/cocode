import { Body, Controller, Put, UseGuards , Request, Get, Query } from '@nestjs/common'
import { AttendHelperService } from './helpers/attend.helper.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { AttendService } from './attend.service'
import { SetUserAttendDto } from './dto/setUserAttendDto'

@Controller('attend')
export class AttendController {
    constructor(
        private attendService : AttendService,
        private attendHelperService : AttendHelperService
    ){}

    @UseGuards(JwtAuthGuard)
    @Put('/')
    async setUserAttend(@Body() setUserAttendDto : SetUserAttendDto , @Request() req){
        return await this.attendHelperService.setUserAttend({uuid : setUserAttendDto.uuid , username : req.user.username})
    }

    @UseGuards(JwtAuthGuard)
    @Get('/user')
    async getUserAttend(@Request() req){
        return await this.attendService.getUserAttend(req.user.username)
    }
}