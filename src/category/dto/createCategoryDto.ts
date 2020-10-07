
import { IsNotEmpty , Allow } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  text: string;

  @Allow()
  photo: string;
}
