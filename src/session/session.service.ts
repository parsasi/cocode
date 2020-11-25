import { Injectable , HttpException , HttpStatus } from '@nestjs/common';
import { InsertResult, Repository } from 'typeorm'
import { Session } from './session.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Tutor } from '../tutor/tutor.entity'
import { Category } from '../category/category.entity'
import { v4 as uuidv4 } from 'uuid'
import { create } from 'domain';

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

interface GetSessionServiceDto {
    uuid : string , 
    username : string
}

// interface GetSessionsServiceDto {
//     username : string
// }

interface GetTutorSessionServiceDto{
    username : string
}

interface CreateWorkspaceServiceDto{
    uuid : string,
    codejarAdminUrl : string,
    codejarPublicUrl : string
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


    async getSessionWithUser(condition : GetSessionServiceDto) : Promise<Session>{

        const columnsToSelect = [
            "session.uuid",
            "session.startTime",
            "session.duration",
            "session.isStarted",
            "session.isEnded",
            "session.rate",
            "session.codejarPublicUrl"
        ]

        const data =  await this.sessionRepository
        .createQueryBuilder("session")
        .leftJoin("session.attends" , "attend")
        .innerJoin("attend.user" , "user" , "user.username = :username" , {username : condition.username})
        .where("session.uuid = :uuid" , {uuid : condition.uuid})
        .select(columnsToSelect)
        .getOne()

        return data
    }


    async getSessionWithTutor(condition : GetSessionServiceDto) : Promise<Session>{
        const columnsToSelect = [
            "session.uuid",
            "session.startTime",
            "session.duration",
            "session.isStarted",
            "session.isEnded",
            "session.rate",
            "session.codejarAdminUrl"
        ]

        return await this.sessionRepository
        .createQueryBuilder("session")
        .leftJoin("session.tutor" , "tutor")
        .innerJoin("tutor.user" , "user" , "user.username = :username" , {username : condition.username})
        .where("session.uuid = :uuid" , {uuid : condition.uuid})
        .select(columnsToSelect)
        .getOne()

    }

    // async getSessionsWithUser(getSessionServiceDto : GetSessionsServiceDto) : Promise<Session[]>{
    //     return await this.sessionRepository
    //     .createQueryBuilder("session")
    //     .where("user.username = :username" , {username : getSessionServiceDto.username})
    //     .innerJoinAndSelect("session.attends" , "attend")
    //     .innerJoin("attend.user" , "user")
    //     .getMany()
    // }

    //Returns all of the non ended sessions for the tutor with the given username
    async getTutorSession(getTutorSessionServiceDto : GetTutorSessionServiceDto){

        const columnsToSelect = [
            'session.uuid',
            'session.startTime',
            'session.duration',
            'session.isStarted',
            'session.rate',
            'session.codejarAdminUrl',
            'category.text',
            'category.photo'
        ]

        return await this.sessionRepository
            .createQueryBuilder('session')
            .innerJoin('session.tutor' , 'tutor')
            .innerJoin('tutor.user' , 'user' , 'user.username = :username' , {username : getTutorSessionServiceDto.username})
            .leftJoinAndSelect('session.category' , 'category')
            .where('session.isEnded = :isEnded' , {isEnded : false})
            .select(columnsToSelect)
            .getMany()
    }

    async createWorkspace(createWorkspaceServiceDto : CreateWorkspaceServiceDto , username : string) : Promise<Session>{
        const session =  await this.sessionRepository
                        .createQueryBuilder('session')
                        .innerJoin('session.tutor' , 'tutor')
                        .innerJoin('tutor.user' , 'user' , 'user.username = :username' , {username})
                        .where('session.uuid = :uuid' , {uuid : createWorkspaceServiceDto.uuid})
                        .getOne()

        if(!session)
            throw new HttpException('UNAUTHORIZED' , HttpStatus.UNAUTHORIZED)

        console.log(createWorkspaceServiceDto)

        session.codejarAdminUrl = createWorkspaceServiceDto.codejarAdminUrl
        session.codejarPublicUrl = createWorkspaceServiceDto.codejarPublicUrl

        return await this.sessionRepository.save(session)

    }
     
}
