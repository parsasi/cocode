import { Controller, Post , UseGuards , Body , Request , Delete , Response , HttpStatus } from '@nestjs/common'
import { RatingService } from './rating.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { CreateRatingDto } from './dto/createRatingDto'
import { DeleteRatingDto } from './dto/deleteRatingDto'

@Controller('rating')
export class RatingController {
    constructor(
        private ratingService : RatingService
    ){}
    
    @UseGuards(JwtAuthGuard)
    @Post('/')
    async createRating(@Body() createRatingDto : CreateRatingDto , @Request() req){
        return await this.ratingService.createRating(createRatingDto , req.user.username)
    }


    @UseGuards(JwtAuthGuard)
    @Delete('/')
    async deleteRating(@Body() deleteRatingDto : DeleteRatingDto , @Request() req , @Response() res){
        const deleteResult =  await this.ratingService.deleteRating(deleteRatingDto , req.user.username)

        //To delete the row(s) remove() is used instead of delete() which returns an array of deleted rows, not a DeleteResult object 
        //Refer to RatingService.deleteRating for more explanation 
        return deleteResult.length > 0 ? res.status(HttpStatus.OK).send() : res.status(HttpStatus.NOT_FOUND).send()

    }
}
