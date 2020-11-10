import { IsNotEmpty , IsNumber} from 'class-validator';


export class DeleteResumeDto {
    @IsNotEmpty()
    @IsNumber()
    id : number
}
