import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AttendService } from '../attend.service'
import { SessionService } from '../../session/session.service'

interface SetUserAttendServiceDto{
    username : string,
    uuid : string,
}

@Injectable()
export class AttendHelperService {
    constructor(
        private attendService : AttendService,
        private sessionService : SessionService,
    ){}

    async setUserAttend(setUserAttendserviceDto : SetUserAttendServiceDto){
        
        const session = await this.sessionService.getSession({uuid : setUserAttendserviceDto.uuid})

        if(session){
            if(session.isStarted && !session.isEnded){
                return await this.attendService.setUserAttend(setUserAttendserviceDto)
            }else{
                throw new HttpException('SESSION NOT IN PROGRESS' , HttpStatus.BAD_REQUEST)
            }
        }else{
            throw new HttpException('NOT FOUND' , HttpStatus.NOT_FOUND)
        }
        
    }

   
}
