import { Injectable } from '@nestjs/common';
import { InsertResult, Repository } from 'typeorm'
import { Session } from './session.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Tutor } from '../tutor/tutor.entity'
import { Category } from '../category/category.entity'
import { v4 as uuidv4 } from 'uuid'

interface createSessionServiceDto {
    startTime : Date,
    duration : number,
    category : Category,
    tutor : Tutor,
    rate : number,
}

@Injectable()
export class SessionService {
    constructor(
        @InjectRepository(Session)
        private sessionRepository : Repository<Session>,
    ){}

    async createSession (session : createSessionServiceDto) : Promise<InsertResult> {
        const newSession = {
            ...session,
            uuid : uuidv4(),
        }
        return await this.sessionRepository.insert(newSession)
    }
}
