import { IsNotEmpty , Allow , IsNumber , Min , Max } from 'class-validator';

const currentYear = new Date().getFullYear();

export class CreateResumeDto {
    @IsNotEmpty()
    title : string

    @Allow()
    description : string

    @Allow()
    organization : string

    @Allow()
    type : 'EXPERIENCE' | 'EDUCATION'

    @Min(currentYear - 100)
    @Max(currentYear)
    @IsNotEmpty()
    @IsNumber()
    startYear : number

    @Min(currentYear - 100)
    @Max(currentYear)
    @IsNumber()
    endYear : number

}
