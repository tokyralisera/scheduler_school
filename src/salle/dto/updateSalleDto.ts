import { IsInt, IsNotEmpty } from "class-validator";


export class UpdateSalleDto {
    @IsNotEmpty()
    nomSalle : string
   
    @IsInt()
    capacite : number
}