
import { Allow, IsNotEmpty } from 'class-validator';

export class GetSessionDto {
    @IsNotEmpty()
    uuid : string;

}
