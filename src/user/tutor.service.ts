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

    async getTutors(tutor) : Promise<Tutor[] >{

        const tutors =  await (await this.tutorRepository
            .createQueryBuilder("tutor")
            .where(tutor).leftJoinAndSelect("tutor.user", "user")
            .getMany())
            .map(item => {
                // This needs to be done inside the query not manually and outside of it 
                // TypeOrm docs do not mention any feature to define which columns to select from the joined table
                delete item.user.hashedPassword
                delete item.user.balance
                return item
            });

        return tutors
    }

    async createTutor(user : User) : Promise<InsertResult>{
        return await this.tutorRepository.insert({user})
    }

}
