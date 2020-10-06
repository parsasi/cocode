import { Injectable } from '@nestjs/common';
import { Tutor } from './tutor.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository , InsertResult } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class TutorService {
    constructor(
        @InjectRepository(Tutor)
        private tutorRepository : Repository<Tutor>
    ){}
    
    async getTutor(userId) : Promise<Tutor | void >{
        return await this.tutorRepository.findOne({
                    where : {user : {id : userId }}
            })
    }

    async createTutor(user : User) : Promise<InsertResult>{
        return await this.tutorRepository.insert({user})
    }
}
