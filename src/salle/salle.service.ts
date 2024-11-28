import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSalleDto } from './dto/createSalleDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateSalleDto } from './dto/updateSalleDto';

@Injectable()
export class SalleService {
  constructor(private readonly prismaService: PrismaService) {}

  async createSalle(createSalleDto: CreateSalleDto) {
    const { nomSalle, capacite } = createSalleDto;
    await this.prismaService.salle.create({ data: { nomSalle, capacite } });
    return { data: 'Salle creee avec succes' };
  }

  async getSalle(id: number) {
    const salleTrouvee = await this.prismaService.salle.findUnique({
      where: { id },
    });
    if (!salleTrouvee) throw new NotFoundException('Salle non trouvee');
    return salleTrouvee;
  }

  async getAllSalle() {
    return this.prismaService.salle.findMany();
  }

  async updateSalle(updateSalleDto: UpdateSalleDto, id: number, ) {
    await this.prismaService.salle.update({
      where: { id },
      data: { ...updateSalleDto },
    });
    return { data: 'Salle mise a jour' };
  }

  async deleteSalle(id: number) {
    const salle = await this.prismaService.salle.delete({ where: { id } });
    if (!salle) throw new NotFoundException('Salle non trouvee');
    return { data: 'Salle supprimee' };
  }
}
