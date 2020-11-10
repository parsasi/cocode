import { IsNotEmpty , Allow , IsNumber , Min , Max , IsOptional , IsEnum } from 'class-validator';
import { Types } from '../resumeTypes'

const currentYear = new Date().getFullYear();


export class CreateResumeDto {
    @IsNotEmpty()
    title : string

    @Allow()
    description : string

    @Allow()
    organization : string

    @IsEnum(Types)
    type : Types

    @Min(currentYear - 100)
    @Max(currentYear)
    @IsNotEmpty()
    @IsNumber()
    startYear : number

    @IsOptional()
    @Min(currentYear - 100)
    @Max(currentYear)
    @IsNumber()
    endYear : number

}
