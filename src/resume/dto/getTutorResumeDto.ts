import { IsNotEmpty} from 'class-validator';


export class GetTutorResumeDto {
        @IsNotEmpty()
        username : string;
}
