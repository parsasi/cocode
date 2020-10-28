
import {IsNotEmpty } from 'class-validator';

export class GetSessionDto {
    @IsNotEmpty()
    uuid : string;

}
