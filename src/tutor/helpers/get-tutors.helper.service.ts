import { Inject, Injectable } from '@nestjs/common';
import { Tutor } from '../tutor.entity'
import { TutorService } from '../tutor.service'
import { ProfilePhotoHelperService } from '../../user/helpers/profile-photo.helper.service'


@Injectable()
export class GetTutorsHelperService {
    constructor(
            @Inject(TutorService)
            private tutorService : TutorService,
            private profilePhotoHelperService : ProfilePhotoHelperService
        ){}
    
    async getAllTutors() : Promise<Tutor[]>{
        const allTutors : Tutor[] = await this.tutorService.getAllTutors()


        //Gets a pre-signed url for tutors' user profiles
        for(const tutor of allTutors){
            if(tutor.user.profilePhoto){
                const profilePhoto : string = await this.profilePhotoHelperService.getProfilePhoto(tutor.user.profilePhoto)
                tutor.user.profilePhoto = profilePhoto
            }
        }

        return allTutors

        
    }
        
}
