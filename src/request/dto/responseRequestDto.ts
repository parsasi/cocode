
import {IsNotEmpty } from 'class-validator';

export class ResponseRequestDto {

    @IsNotEmpty()
    isAccepted : boolean;

    @IsNotEmpty()
    id : number;
    
}
