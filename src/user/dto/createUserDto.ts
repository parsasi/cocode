
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;


  @IsNotEmpty()
  firstName: string;

  
  @IsNotEmpty()
  username: string;
  

  @IsNotEmpty()
  lastName: string;
}
