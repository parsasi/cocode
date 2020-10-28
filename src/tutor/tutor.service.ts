import { Injectable } from '@nestjs/common';
import { Tutor } from './tutor.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository , InsertResult  } from 'typeorm'
import { User } from '../user/user.entity'

@Injectable()
export class TutorService {
    constructor(
        @InjectRepository(Tutor)
        private tutorRepository : Repository<Tutor>
    ){}
    
    //To get the tutor for a specific user, pass in {user : {id : userId }} as your tutor object
    async getTutor(tutor) : Promise<Tutor | void >{
        return await this.tutorRepository.findOne({
                    where : {tutor}
        })
    }

    //Gets a list of tutors with their categories and associated user, filtering by categories
    async getTutorsCategorySearch(categories : number[]) : Promise<Tutor[]>{
        const tutors =  await (await this.tutorRepository
            .createQueryBuilder("tutor")
            .innerJoinAndSelect("tutor.categories", "category" , "category.id in (:...categories)" , {categories})
            .leftJoinAndSelect("tutor.user", "user")
            .getMany())
        return tutors
    }


    //returns an array of tutors with usernames close to given username
    async getTutorsUsernameSearch(user : {username : string}) : Promise<Tutor[]> {
        const tutors =  await (await this.tutorRepository
            .createQueryBuilder("tutor")
            .innerJoinAndSelect("tutor.user", "user" , "user.username like :username" , { username:`%${user.username}%` })
            .leftJoinAndSelect("tutor.categories", "category")
            .getMany())

        return tutors
    }


    //returns a single tutor with the given username
    async getTutorUsernameSearch(user : {username : string}) : Promise<Tutor> {
        return await this.tutorRepository
            .createQueryBuilder("tutor")
            .innerJoinAndSelect("tutor.user", "user" , "user.username = :username" , { username: user.username })
            .leftJoinAndSelect("tutor.categories", "category")
            .getOne()
    }

    //Creates a tutor account, for the passed in user
    async createTutor(user : User) : Promise<InsertResult>{
        return await this.tutorRepository.insert({user})
    }

}
