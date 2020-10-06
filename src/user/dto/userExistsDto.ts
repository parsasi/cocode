
import { IsNotEmpty , IsEmail } from 'class-validator';

export class UserExistsUsernameDto {
  @IsNotEmpty()
  username: string;
}


export class UserExistsEmailDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
