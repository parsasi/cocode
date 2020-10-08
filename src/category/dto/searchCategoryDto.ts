
import { IsNotEmpty} from 'class-validator';

export class searchCategoryDto {
  @IsNotEmpty()
  text: string;
}
