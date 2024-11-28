import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUniteEnseignementDto } from './dto/createUniteEnseignement';
import { UpdateUniteEnseignementDto } from './dto/updateUniteEnseignement';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UniteenseignementService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUniteEnseignement(
    createUniteEnseignementDto: CreateUniteEnseignementDto,
  ) {
    const { nomUnite } = createUniteEnseignementDto;
    return this.prismaService.uniteEnseignement.create({
      data: {
        nomUnite,
      },
    });
  }

  async getAllUniteEnseignements() {
    return this.prismaService.uniteEnseignement.findMany({
      include: { matiere: true },
    });
  }

  async getUniteEnseignement(id: number) {
    const uniteEnseignement =
      await this.prismaService.uniteEnseignement.findUnique({
        where: { id },
        include: { matiere: true },
      });
    if (!uniteEnseignement) {
      throw new NotFoundException(
        `Unité d'enseignement avec l'ID ${id} non trouvée`,
      );
    }
    return uniteEnseignement;
  }

  async updateUniteEnseignement(
    updateUniteEnseignementDto: UpdateUniteEnseignementDto,
    id: number,
  ) {
    const { nomUnite } = updateUniteEnseignementDto;

    const existingUniteEnseignement =
      await this.prismaService.uniteEnseignement.findUnique({
        where: { id },
      });

    if (!existingUniteEnseignement) {
      throw new NotFoundException(
        `Unité d'enseignement avec l'ID ${id} non trouvée`,
      );
    }

    return this.prismaService.uniteEnseignement.update({
      where: { id },
      data: {
        nomUnite,
      },
    });
  }

  async deleteUniteEnseignement(id: number) {
    const existingUniteEnseignement =
      await this.prismaService.uniteEnseignement.findUnique({
        where: { id },
      });

    if (!existingUniteEnseignement) {
      throw new NotFoundException(
        `Unité d'enseignement avec l'ID ${id} non trouvée`,
      );
    }

    return this.prismaService.uniteEnseignement.delete({
      where: { id },
    });
  }
}
