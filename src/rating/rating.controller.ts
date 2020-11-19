import { Controller, Post , UseGuards , Body , Request } from '@nestjs/common'
import { RatingService } from './rating.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { CreateRatingDto } from './dto/createRatingDto'

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
}
