import { Injectable } from '@nestjs/common';
import { Tutor } from './tutor.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository , InsertResult  } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class TutorService {
    constructor(
        @InjectRepository(Tutor)
        private tutorRepository : Repository<Tutor>
    ){}
    
    async getTutor(tutor) : Promise<Tutor | void >{

        //To get the tutor for a specific user, pass in {user : {id : userId }} as your tutor object

        return await this.tutorRepository.findOne({
                    where : {tutor}
        })
    }

    async createTutor(user : User) : Promise<InsertResult>{
        return await this.tutorRepository.insert({user})
    }   

}
