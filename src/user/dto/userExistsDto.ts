
import { IsNotEmpty } from 'class-validator';

export class UserExistsDto {
  @IsNotEmpty()
  username: string;
}
