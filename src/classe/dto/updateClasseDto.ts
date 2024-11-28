import { IsNotEmpty } from "class-validator"


export class UpdateClasseDto {
    @IsNotEmpty()
    niveau : string
    
    @IsNotEmpty()
    parcours : string

}