import { Injectable } from '@nestjs/common';
import { Tutor } from './tutor.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository , InsertResult  } from 'typeorm'
import { User } from '../user/user.entity'
import { Category } from '../category/category.entity'

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

    async getTutorCategorySearch(categories : number[]) : Promise<Tutor[]>{
        
        const tutors =  await (await this.tutorRepository
            .createQueryBuilder("tutor")
            .innerJoinAndSelect("tutor.categories", "category" , "category.id in (:...categories)" , {categories})
            .leftJoinAndSelect("tutor.user", "user")
            .getMany())
        return tutors
    }

    async getTutorUsernameSearch(user : {username : string}) : Promise<Tutor[]> {
        const tutors =  await (await this.tutorRepository
            .createQueryBuilder("tutor")
            .innerJoinAndSelect("tutor.user", "user" , "user.username like :username" , { username:`%${user.username}%` })
            .leftJoinAndSelect("tutor.categories", "category")
            .getMany())

        return tutors
    }

    async createTutor(user : User) : Promise<InsertResult>{
        return await this.tutorRepository.insert({user})
    }

}
