
import { IsEmail, IsNotEmpty , Allow } from 'class-validator';

export class EditUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;


  @IsNotEmpty()
  firstName: string;
  
  @IsNotEmpty()
  lastName: string;

  @Allow()
  profilePhoto: string;

}
