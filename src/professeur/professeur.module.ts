import { Module } from '@nestjs/common';
import { ProfesseurController } from './professeur.controller';
import { ProfesseurService } from './professeur.service';


@Module({
  controllers: [ProfesseurController],
  providers: [ProfesseurService],
})
export class ProfesseurModule {}