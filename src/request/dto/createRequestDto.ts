
import {IsNotEmpty , IsDateString , IsNumber  , Max, Allow} from 'class-validator';

const NUMBER_OF_SECONDS_IN_A_DAY = 60 * 60 * 24;

export class CreateRequestDto {
    //Username of the intended tutor

    @IsNotEmpty()
    username : string

    //Category text of the tutoring session
    @IsNotEmpty()
    category: string;

    @Allow()
    description : string;

    @IsNotEmpty()
    @IsDateString()
    startTime: Date;

    @IsNotEmpty()
    @IsNumber()
    @Max(NUMBER_OF_SECONDS_IN_A_DAY)
    duration: number;
    
}
