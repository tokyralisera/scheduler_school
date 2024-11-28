import { IsNotEmpty, IsString, IsBoolean, IsNumber, IsEmail } from "class-validator"

export class CreateProfesseurDto {
    @IsNotEmpty()
    @IsString()
    nomProfesseur: string

    @IsNotEmpty()
    @IsString()
    prenomProfesseur: string

    @IsNotEmpty()
    @IsEmail()
    emailProfesseur: string

    @IsNotEmpty()
    @IsString()
    telephoneProfesseur: string

    @IsNotEmpty()
    @IsBoolean()
    disponibilite: boolean

    @IsNotEmpty()
    @IsNumber()
    matiere_id: number
}
