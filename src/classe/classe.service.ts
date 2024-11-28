import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClasseDto } from './dto/createClasseDto';
import { UpdateClasseDto } from './dto/updateClasseDto';

@Injectable()
export class ClasseService {
  constructor(private readonly prismaService: PrismaService) {}

  async createClasse(createClasseDto: CreateClasseDto) {
    const { niveau, parcours } = createClasseDto;
    await this.prismaService.classe.create({ data: { niveau, parcours } });
    return { data: 'Classe creee avec succes' };
  }

  async getAllClasse() {
    return this.prismaService.classe.findMany();
  }

  async getClasse(id: number) {
    const classeTrouvee = await this.prismaService.classe.findUnique({
      where: { id },
    });
    if (!classeTrouvee) throw new NotFoundException('Classe non trouvee');
    return classeTrouvee;
  }

  async updateClasse(updateClasseDto: UpdateClasseDto, id: number) {
    await this.prismaService.classe.update({
      where: { id },
      data: { ...updateClasseDto },
    });
    return { data: 'Classe mis a jour' };
  }

  async deleteClasse(id: number) {
    const classe = await this.prismaService.classe.delete({ where: { id } });
    if (!classe) throw new NotFoundException('Classe non trouvee');
    return { data: 'Classe supprimee' };
  }
}
