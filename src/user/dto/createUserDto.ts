
import { All } from '@nestjs/common';
import { IsEmail, IsNotEmpty , Allow } from 'class-validator';

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

  @Allow()
  profilePhoto: string;

  @Allow()
  isAcceptedTerms: boolean;
}
