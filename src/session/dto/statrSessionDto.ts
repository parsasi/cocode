
import {IsNotEmpty } from 'class-validator';

export class StartSessionDto {

    @IsNotEmpty()
    uuid : string;

}
