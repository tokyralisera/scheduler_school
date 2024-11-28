import { IsOptional, IsString } from "class-validator"

export class UpdateUniteEnseignementDto {
    @IsOptional()
    @IsString()
    nomUnite?: string
}