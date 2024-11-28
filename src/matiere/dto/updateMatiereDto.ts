import { IsNotEmpty, IsNumber, IsOptional } from "class-validator"


export class UpdateMatiereDto {
    @IsNotEmpty()
    nomMatiere : string
    
    descriptionMatiere : string
    
    codeMatiere : string

    @IsOptional()
    @IsNumber()
    unite_id?: number
}