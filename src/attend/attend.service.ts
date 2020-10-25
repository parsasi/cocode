import { Injectable } from '@nestjs/common';
import { Repository , InsertResult } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Attend } from './attend.entity'
import { User } from '../user/user.entity'
import { Session } from '../session/session.entity'

interface createAttendServiceDto {
    user : User,
    session : Session
}

@Injectable()
export class AttendService {
    constructor(
        @InjectRepository(Attend)
        private attendRepository : Repository<Attend>
    ){}

    async createAttend(attend : createAttendServiceDto) : Promise<InsertResult>{
        return await this.attendRepository.insert(attend)
    }
}
