import { Injectable , HttpException , HttpStatus } from '@nestjs/common';
import { CategoryService } from '../../category/category.service';
import { TutorService } from '../../tutor/tutor.service';
import { RequestService } from '../request.service'
import { UserService } from '../../user/user.service'
import { Tutor } from '../../tutor/tutor.entity'
import { Category } from '../../category/category.entity'
import { stringType } from 'aws-sdk/clients/iam'
import { User } from '../../user/user.entity'

@Injectable()
export class RequestHelperService {
    constructor(
        private requestService : RequestService,
        private categoryService : CategoryService,
        private tutorService : TutorService,
        private userService : UserService
    ){}
    
    async sendRequest(tutorUsername : string , categoryText : string , userUsername : stringType){
        const tutor : Tutor = await this.tutorService.getTutorUsernameSearch({username : tutorUsername});

        const category : Category = await this.categoryService.getCategoryWithText({text : categoryText})

        const user : User | void = await this.userService.getUserByUsername(userUsername)


        if(tutor && category && user){
            return await this.requestService.createRequest({tutor , category , user})
        }else{
            throw new HttpException("Invalid Input", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

       
}
