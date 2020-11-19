import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository , InsertResult, DeleteResult } from 'typeorm'
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

interface DeleteRatingServiceDto {
    id : number
}

interface GetTutorRatingsServiceDto {
    username : string
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
            throw new HttpException('USER NOT FOUND' , HttpStatus.NOT_FOUND)
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

    async deleteRating(deleteRatingServiceDto : DeleteRatingServiceDto , username : string) : Promise<Rating[]>{   
        //TypeOrm does not support joins in delete statements. To work around that, we select the rows first and delete them using remove()
        // Note that remove returns an array of removed rows, not a DeleteResult object, so it needs to be treated differently inside the controller    
        const ratingToDelete =  await this.ratingRepository.createQueryBuilder('rating')
            .innerJoin('rating.user' , 'user')
            .where("user.username = :username AND rating.id = :id" , { username ,  id: deleteRatingServiceDto.id  })
            .getMany();

        return await this.ratingRepository.remove(ratingToDelete)

    }

    async getTutorRatings(getTutorRatingsServiceDto : GetTutorRatingsServiceDto) : Promise<Rating[]> {
            const ratings = await this.ratingRepository
                        .createQueryBuilder('rating')
                        .innerJoin('rating.tutor' , 'tutor')
                        .innerJoin('tutor.user' , 'user' , 'user.username = :username' , {username : getTutorRatingsServiceDto.username})
                        .getMany()

            
            return ratings
        }
}
