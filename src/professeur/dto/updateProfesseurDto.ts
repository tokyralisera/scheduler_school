import { IsOptional, IsString, IsBoolean, IsNumber, IsEmail } from "class-validator"

export class UpdateProfesseurDto {
    @IsOptional()
    @IsString()
    nomProfesseur?: string

    @IsOptional()
    @IsString()
    prenomProfesseur?: string

    @IsOptional()
    @IsEmail()
    emailProfesseur?: string

    @IsOptional()
    @IsString()
    telephoneProfesseur?: string

    @IsOptional()
    @IsBoolean()
    disponibilite?: boolean

    @IsOptional()
    @IsNumber()
    matiere_id?: number
}