import { Allow , IsNotEmpty , Min , Max } from 'class-validator'

export class CreateRatingDto{
    @IsNotEmpty()
    username : string

    @Min(0)
    @Max(5)
    @IsNotEmpty()
    score : number

    @Allow()
    text : string
}