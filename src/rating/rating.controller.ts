import { Controller, Post , UseGuards , Body , Request , Delete } from '@nestjs/common'
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
    async deleteRating(@Body() deleteRatingDto : DeleteRatingDto , @Request() req){
        return await this.ratingService.deleteRating(deleteRatingDto , req.user.username)
    }
}
