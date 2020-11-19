import { IsNotEmpty }  from 'class-validator'

export class GetTutorRatingsDto {
    @IsNotEmpty()
    username : string
}