
import { Allow } from 'class-validator';

export class GetSessionDto {
    @Allow()
    uuid : string;

}
