import { Injectable , HttpException , HttpStatus } from '@nestjs/common';
import { InsertResult, Repository } from 'typeorm'
import { Session } from './session.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Tutor } from '../tutor/tutor.entity'
import { Category } from '../category/category.entity'
import { v4 as uuidv4 } from 'uuid'

interface CreateSessionServiceDto {
    startTime : Date,
    duration : number,
    category : Category,
    tutor : Tutor,
    rate : number,
}

interface StartSessionServiceDto {
    uuid : string,
    tutor : Tutor
}


interface EndSessionServiceDto {
    uuid : string,
    tutor : Tutor
}

@Injectable()
export class SessionService {
    constructor(
        @InjectRepository(Session)
        private sessionRepository : Repository<Session>,
    ){}

    async createSession (session : CreateSessionServiceDto) : Promise<InsertResult> {
        const newSession = {
            ...session,
            uuid : uuidv4(),
        }
        return await this.sessionRepository.insert(newSession)
    }


    async getSession(condition) : Promise<Session> {
        return await this.sessionRepository.findOne(condition)
    }

    //statrSession and endSession could have been combined into one function, but implementation details are going to be different later

    //Marks the session in the database as started
    async startSession(condition : StartSessionServiceDto): Promise<Session> {
        const session =  await this.sessionRepository.findOne(condition)

        if(!session)
            throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED)
        else if(session.isStarted)
            throw new HttpException("Session already started", HttpStatus.INTERNAL_SERVER_ERROR)

        session.isStarted = true
        session.startTime = new Date(new Date().toISOString())
        return await this.sessionRepository.save(session)
    }

    //Marks the session in the database as ended
    async endSession(condition : EndSessionServiceDto): Promise<Session> {
        const session =  await this.sessionRepository.findOne(condition)

        if(!session)
            throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED)
        else if(!session.isStarted)
            throw new HttpException("Session not started", HttpStatus.INTERNAL_SERVER_ERROR)
        else if(session.isEnded)
            throw new HttpException("Session already ended", HttpStatus.INTERNAL_SERVER_ERROR)

        session.isEnded = true
        return await this.sessionRepository.save(session)
    }
}
