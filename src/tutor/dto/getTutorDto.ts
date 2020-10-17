
import { IsEmail, IsNotEmpty , Allow } from 'class-validator';

export class GetTutoUsernamerDto {
  @Allow()
  username: string;
}

export class GetTutorCategoryDto {

  @Allow()
  category : string;

}