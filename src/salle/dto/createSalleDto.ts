import { IsInt, IsNotEmpty } from "class-validator";


export class CreateSalleDto {
    @IsNotEmpty()
    nomSalle : string
    
    @IsInt()
    capacite : number
}