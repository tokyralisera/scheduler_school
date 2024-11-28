import { IsNotEmpty, IsString } from "class-validator"

export class CreateUniteEnseignementDto {
    @IsNotEmpty()
    @IsString()
    nomUnite: string
}