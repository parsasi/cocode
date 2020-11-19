import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository , InsertResult } from 'typeorm'
import { Rating } from './rating.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { UserService } from '../user/user.service'
import { TutorService } from '../tutor/tutor.service'
import { AttendService } from '../attend/attend.service'
import { Attend } from '../attend/attend.entity'

interface CreateRatingServiceDto {
    username : string,
    score : number,
    text : string
}


@Injectable()
export class RatingService {
    constructor(
        @InjectRepository(Rating)
        private ratingRepository : Repository<Rating>,
        private tutorService : TutorService,
        private userService : UserService,
        private attendService : AttendService
    ){}

    async createRating(createRatingServiceDto : CreateRatingServiceDto , username : string) : Promise<InsertResult> {
        
        //Gets the user object for the user who is rating(username should be extracted from the request object)
        const user = await this.userService.getUserByUsername(username)

        //Gets the tutor object for the tutor that is being reviewed
        const tutor = await this.tutorService.getTutorUsernameSearch({username : createRatingServiceDto.username})


        //If either is non-existant throw an error
        if(!user || !tutor){
            throw new HttpException('NOT FOUND' , HttpStatus.NOT_FOUND)
        }

        //Gets all the attends from a user to a tutors sessions
        const attends : Attend[] = await this.attendService.getUserTutorAttend(user , tutor)

        //If the user has not had a session with the tutor, theey are unauthorized to rate
        if(!attends.length){
            throw new HttpException('USER UNAUTHORIZED' , HttpStatus.UNAUTHORIZED)
        }


        const newRating = {
            text : createRatingServiceDto.text,
            score : createRatingServiceDto.score,
            tutor,
            user
        }

        return await this.ratingRepository.insert(newRating)
    }
}
