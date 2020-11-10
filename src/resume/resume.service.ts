import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository , InsertResult } from 'typeorm'
import { Resume } from './resume.entity'
import { TutorService } from '../tutor/tutor.service'


interface AddResumeServiceDto{
    title : string,
    description : string,
    organization : string,
    type : 'EXPERIENCE' | 'EDUCATION',
    startYear : number,
    endYear : number, 
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
}
