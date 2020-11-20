import { IsNotEmpty } from 'class-validator'

export class GetUserDto{
    @IsNotEmpty()
    username : string
}