import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMatiereDto } from './dto/createMatiereDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateMatiereDto } from './dto/updateMatiereDto';

@Injectable()
export class MatiereService {
  constructor(private readonly prismaService: PrismaService) {}

  async createMatiere(createMatiereDto: CreateMatiereDto) {
    const { nomMatiere, descriptionMatiere, codeMatiere, unite_id } =
      createMatiereDto;
    await this.prismaService.matiere.create({
      data: {
        nomMatiere,
        descriptionMatiere,
        codeMatiere,
        unite_id,
      },
    });
    return { data: 'Matière créée avec succès' };
  }

  async getMatiere(id: number) {
    const matiereTrouvee = await this.prismaService.matiere.findUnique({
      where: { id },
    });
    if (!matiereTrouvee) throw new NotFoundException('Matière non trouvée');
    return matiereTrouvee;
  }

  async getAllMatieres() {
    return this.prismaService.matiere.findMany();
  }

  async updateMatiere(updateMatiereDto: UpdateMatiereDto, id: number) {
    await this.prismaService.matiere.update({
      where: { id },
      data: updateMatiereDto,
    });
    return { data: 'Matière mise à jour' };
  }

  async deleteMatiere(id: number) {
    const matiere = await this.prismaService.matiere.delete({ where: { id } });
    if (!matiere) throw new NotFoundException('Matière non trouvée');
    return { data: 'Matière supprimée' };
  }
}
