import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfesseurDto } from './dto/createProfesseurDto';
import { UpdateProfesseurDto } from './dto/updateProfesseurDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfesseurService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProfesseur(createProfesseurDto: CreateProfesseurDto) {
    const {
      nomProfesseur,
      prenomProfesseur,
      emailProfesseur,
      telephoneProfesseur,
      disponibilite,
      matiere_id,
    } = createProfesseurDto;
    await this.prismaService.professeur.create({
      data: {
        nomProfesseur,
        prenomProfesseur,
        emailProfesseur,
        telephoneProfesseur,
        disponibilite,
        matiere_id,
      },
    });
    return { data: 'Professeur créé avec succès' };
  }

  async getProfesseur(id: number) {
    const professeurTrouve = await this.prismaService.professeur.findUnique({
      where: { id },
    });
    if (!professeurTrouve) throw new NotFoundException('Professeur non trouvé');
    return professeurTrouve;
  }

  async getAllProfesseurs() {
    return this.prismaService.professeur.findMany();
  }

  async updateProfesseur(updateProfesseurDto: UpdateProfesseurDto, id: number) {
    await this.prismaService.professeur.update({
      where: { id },
      data: updateProfesseurDto,
    });
    return { data: 'Professeur mis à jour' };
  }

  async deleteProfesseur(id: number) {
    const professeur = await this.prismaService.professeur.delete({
      where: { id },
    });
    if (!professeur) throw new NotFoundException('Professeur non trouvé');
    return { data: 'Professeur supprimé' };
  }
}
