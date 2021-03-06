import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository , InsertResult } from 'typeorm'
import { Resume } from './resume.entity'
import { TutorService } from '../tutor/tutor.service'
import { Types } from './resumeTypes'

interface AddResumeServiceDto{
    title : string,
    description : string,
    organization : string,
    type : Types,
    startYear : number,
    endYear : number, 
}


interface UpdateResumeServiceDto {
    id : number,
    title : string,
    description : string,
    organization : string,
    startYear : number,
    endYear : number,
}

interface DeleteResumeServiceDto {
    id : number
}


interface GetTutorResumeServiceDto{
    username : string
}

@Injectable()
export class ResumeService {
    constructor(
        @InjectRepository(Resume)
        private resumeRepository : Repository<Resume>,
        private tutorService : TutorService
    ){}

    
    async addResumeItem(addResumeServiceDto : AddResumeServiceDto , username : string) : Promise<InsertResult>{
        const tutor = await this.tutorService.getTutorUsernameSearch({username})
        
        //If there is no tutor associated with the user that sends the request
        if(!tutor)
            throw new HttpException('TUTOR NOT FOUND' , HttpStatus.NOT_FOUND)

        const newResume = {
            ...addResumeServiceDto,
            tutor
        }

        return await this.resumeRepository.insert(newResume)

    }

    async deleteResumeItem(deleteResumeServiceDto : DeleteResumeServiceDto , username : string) : Promise<Resume[]>{

        //Deletes the resume item that belongs to the tutor found, with the id given
        const resumes = await this.resumeRepository
                    .createQueryBuilder('resume')
                    .innerJoin('resume.tutor' , 'tutor')
                    .innerJoin('tutor.user' , 'user' , "user.username = :username" , {username})
                    .where("resume.id = :id", { id: deleteResumeServiceDto.id })
                    .getMany();

        return await this.resumeRepository.remove(resumes)
    }

    async updateResumeItem(updateResumeServiceDto : UpdateResumeServiceDto , username : string){

        //Gets the tutor for username inputted, which is meant to be the user that is signed in
        const tutor = await this.tutorService.getTutorUsernameSearch({username})


        //Finds the resume item that belongs to the tutor found, with the id given
        let resume = await this.resumeRepository
                .createQueryBuilder('resume')
                .where("resume.tutor = :tutor" , {tutor})
                .where("resume.id = :id", { id: updateResumeServiceDto.id })
                .leftJoin('resume.tutor' , 'tutor')
                .getOne()

        
                
        //Updates the resume with the new data        
        resume = {...resume , ...updateResumeServiceDto}

        this.resumeRepository.save(resume)

    }

    async getTutorResume(userResumeServiceDto : GetTutorResumeServiceDto){

        //Getting the tutor for the given username
        const tutor = await this.tutorService.getTutorUsernameSearch({username : userResumeServiceDto.username})

        
        return await this.resumeRepository.find({tutor : tutor})
    }
    
}
