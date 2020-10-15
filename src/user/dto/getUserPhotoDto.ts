
import { IsNotEmpty } from 'class-validator';

export class GetUserPhotoDto {
  @IsNotEmpty()
  username: string;
}
