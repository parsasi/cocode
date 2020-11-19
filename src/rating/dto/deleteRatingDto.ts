import { IsNotEmpty , IsNumber } from 'class-validator'

export class DeleteRatingDto{
    @IsNotEmpty()
    @IsNumber()
    id : number
}