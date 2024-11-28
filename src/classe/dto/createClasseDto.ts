import { IsNotEmpty } from "class-validator"


export class CreateClasseDto {
    @IsNotEmpty()
    niveau : string
    
    @IsNotEmpty()
    parcours : string

}