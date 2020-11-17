import { Optional } from '@nestjs/common';
import { IsNotEmpty , Allow , IsNumber , Min , Max , IsOptional ,  } from 'class-validator';

const currentYear = new Date().getFullYear();


export class UpdateResumeDto {
        @IsNumber()
        id : number;

        title : string

        @Allow()
        description : string

        @Allow()
        organization : string

        @IsOptional()
        @Min(currentYear - 100)
        @Max(currentYear)
        @IsNumber()
        startYear : number

        @IsOptional()
        @Min(currentYear - 100)
        @Max(currentYear)
        @IsNumber()
        endYear : number

}
