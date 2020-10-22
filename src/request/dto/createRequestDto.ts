
import {IsNotEmpty } from 'class-validator';

export class CreateRequestDto {
    //Username of the intended tutor

    @IsNotEmpty()
    username : string


    //Category text of the tutoring session
    @IsNotEmpty()
    category: string;
    
}
