import { Allow } from 'class-validator'

export class GetUserDto{
    @Allow()
    username : string
}