import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository , InsertResult } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Attend } from './attend.entity'
import { User } from '../user/user.entity'
import { Tutor } from '../tutor/tutor.entity'
import { Session } from '../session/session.entity'

interface CreateAttendServiceDto {
    user : User,
    session : Session
}

interface SetUserAttendServiceDto{
    username : string,
    uuid : string
}



@Injectable()
export class AttendService {
    constructor(
        @InjectRepository(Attend)
        private attendRepository : Repository<Attend>
    ){}

    async createAttend(createAttendServiceDto : CreateAttendServiceDto) : Promise<InsertResult>{
        //Creates an attend
        //This is meant to be called, when a request gets accepted
        return await this.attendRepository.insert(createAttendServiceDto)
    }

    async setUserAttend(setUserAttendServiceDto : SetUserAttendServiceDto) : Promise<Attend> {
        //Getting the attend for the given user and given session
        const attend = await this.attendRepository
            .createQueryBuilder('attend')
            .where("user.username = :username" , {username : setUserAttendServiceDto.username})
            .where("session.uuid = :uuid" , {uuid : setUserAttendServiceDto.uuid})
            .leftJoin('attend.user' , 'user')
            .leftJoin('attend.session' , 'session')
            .getOne()

        //If the attend row with the given user and session is not found, throw an error
        if(!attend)
            throw new HttpException('Not Found' , HttpStatus.NOT_FOUND)

        attend.isAttended = true

        return await this.attendRepository.save(attend)
    }

    //Returns attends of a user associated with an specific tutor
    //Meant to be used to authorize users to rate a tutor
    async getUserTutorAttend(user : User , tutor : Tutor) : Promise<Attend[]>{

        //Gets the attends of a user to a specifig tutor's sessions
        const attend = await this.attendRepository
        .createQueryBuilder('attend')
        .where("user.username = :username" , {username : user.username})
        .where("session.tutorId = :tutorId" , {tutorId : tutor.id})
        .leftJoin('attend.user' , 'user')
        .leftJoin('attend.session' , 'session')
        .getMany()

        return attend
    }   
}
