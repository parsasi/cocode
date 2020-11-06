import { Body, Controller, Put, UseGuards , Request } from '@nestjs/common'
import { AttendHelperService } from './helpers/attend.helper.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { SetUserAttendDto } from './dto/setUserAttendDto'

@Controller('attend')
export class AttendController {
    constructor(
        private attendHelperService : AttendHelperService
    ){}

    @UseGuards(JwtAuthGuard)
    @Put('/')
    async setUserAttend(@Body() setUserAttendDto : SetUserAttendDto , @Request() req){
        return await this.attendHelperService.setUserAttend({uuid : setUserAttendDto.uuid , username : req.user.username})
    }

}
