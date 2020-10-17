import { Inject, Injectable } from '@nestjs/common';
import { Tutor } from '../tutor.entity'
import { TutorService } from '../tutor.service'

@Injectable()
export class TutorSearchHelperService {
    constructor(
            @Inject(TutorService)
            private tutorService : TutorService
        ){}
    
        async searchTutorWithCategory(categories) : Promise<Tutor[]>{
            console.log(this.tutorService)
            if(categories.length){
                const tutorIds = categories.map(item => item.id)
                const tutors = await this.tutorService.getTutors(tutorIds)
                return await tutors;
            }
            return Promise.resolve([])
        }
}
