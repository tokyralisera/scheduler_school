import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEdtDto } from './dto/createEdtDto';
import { UpdateEdtDto } from './dto/updateEdtDto';

@Injectable()
export class EdtService {
  constructor(private prismaService: PrismaService) {}

  // Créer un emploi du temps
  create(createEmploiDeTempsDto: CreateEdtDto) {
    return this.prismaService.emploiDeTemps.create({
      data: createEmploiDeTempsDto,
    });
  }

  // Récupérer tous les emplois du temps avec `matiere.nom` comme titre
  async findAll() {
    const emplois = await this.prismaService.emploiDeTemps.findMany({
      include: {
        matiere: true, // Inclure les informations sur la matière
      },
    });

    // Ajout dynamique du titre (matiere.nom) pour DHTMLX
    return emplois.map((emploi) => ({
      id: emploi.id,
      start_date: emploi.heure_debut.toISOString(),
      end_date: emploi.heure_fin.toISOString(),
      text: emploi.matiere.nomMatiere, 
    }));
  }

  // Récupérer un emploi du temps par ID
  findOne(id: number) {
    return this.prismaService.emploiDeTemps.findUnique({
      where: { id },
      include: {
        matiere: true, // Inclure la relation avec la matière
      },
    });
  }

  // Mettre à jour un emploi du temps
  update(id: number, updateEmploiDeTempsDto: UpdateEdtDto) {
    return this.prismaService.emploiDeTemps.update({
      where: { id },
      data: updateEmploiDeTempsDto,
    });
  }

  // Supprimer un emploi du temps
  remove(id: number) {
    return this.prismaService.emploiDeTemps.delete({
      where: { id },
    });
  }
}
