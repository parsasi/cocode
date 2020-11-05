
import { IsNotEmpty } from 'class-validator';

export class GetTutorVideoDto {
  @IsNotEmpty()
  username: string;
}
