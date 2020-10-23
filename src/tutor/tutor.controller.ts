import { Controller  , Post , Body, Get, Query , UseGuards , Request , HttpStatus , Res , Inject , forwardRef} from '@nestjs/common';
import { UserService } from '../user/user.service'
import { Response } from 'express'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { User } from '../user/user.entity'
import { TutorService } from './tutor.service'
import { GetTutoUsernamerDto , GetTutorCategoryDto } from './dto/getTutorDto'
import { CategoryService } from '../category/category.service'
import { TutorSearchHelperService } from './helpers/tutor-search.helper.service'
import { Tutor } from './tutor.entity'
import { Console } from 'console';

@Controller('tutor')
export class TutorController {
    constructor(
        @Inject(forwardRef(() => UserService))
        private userService : UserService,
        private tutorService : TutorService,
        private categoryService : CategoryService,
        private tutorSearchHelperService : TutorSearchHelperService 
    ){}
    
    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async createTutor(@Request() req , @Res() res: Response){
        //fetching the user associated with the tutor
        const user : User | void = await this.userService.getUserByUsername(req.user.username)
        if(user){
            const insertResults = await this.tutorService.createTutor(user)
            return await insertResults && res.status(HttpStatus.CREATED).send()
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send()
    }

    @Get('/search')
    async getTutor(@Query() getTutorDto :  GetTutorCategoryDto | GetTutoUsernamerDto) : Promise<Tutor[] | User[]>{
        console.log("REQUEST RECIEVED:" , getTutorDto)
        if('username' in getTutorDto){
            console.log("REQUEST IS A USERNAME ONE");
            return await this.tutorService.getTutorsUsernameSearch({username : getTutorDto.username})
        }else{
            console.log("REQUEST IS A CATEGORY ONE");
            const categories = await this.categoryService.getCategoryForSearch(getTutorDto.category)
            return await this.tutorSearchHelperService.searchTutorWithCategory(categories)
        }   
    }

}