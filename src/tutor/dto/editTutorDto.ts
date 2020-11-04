
import { Allow, IsNumber } from 'class-validator';

export class EditUserDto {
  @Allow()
  bioText: string;

  @IsNumber()
  hourlyRate: number;
  
  @Allow()
  socialUrl: string;

  @Allow()
  profileTitle: string;

}
