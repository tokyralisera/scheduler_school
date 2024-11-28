import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateEdtDto {
  @IsString()
  jour: string;

  @IsInt()
  semaine: number;

  @IsDateString()
  heure_debut: Date;

  @IsDateString()
  heure_fin: Date;

  @IsInt()
  matiere_id: number;

  @IsInt()
  professeur_id: number;

  @IsInt()
  salle_id: number;

  @IsInt()
  classe_id: number;
}