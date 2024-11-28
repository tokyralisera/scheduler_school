import { Global, Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ClasseModule } from './classe/classe.module';
import { ConfigModule } from '@nestjs/config';
import { SalleModule } from './salle/salle.module';
import { MatiereModule } from './matiere/matiere.module';
import { ProfesseurController } from './professeur/professeur.controller';
import { ProfesseurService } from './professeur/professeur.service';
import { ProfesseurModule } from './professeur/professeur.module';
import { UniteenseignementModule } from './uniteenseignement/uniteenseignement.module';
import { EdtModule } from './edt/edt.module';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, ClasseModule, SalleModule, MatiereModule, ProfesseurModule, UniteenseignementModule, EdtModule],
  controllers: [ProfesseurController],
  providers: [ProfesseurService],
})
export class AppModule {}
