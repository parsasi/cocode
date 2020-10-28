
import {IsNotEmpty } from 'class-validator';

export class EndSessionDto {

    @IsNotEmpty()
    uuid : string;

}
