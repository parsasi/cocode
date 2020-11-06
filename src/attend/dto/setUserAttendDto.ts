
import {IsNotEmpty } from 'class-validator';

export class SetUserAttendDto {
    @IsNotEmpty()
    uuid : string;
}
