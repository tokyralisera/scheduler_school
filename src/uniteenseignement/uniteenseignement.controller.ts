import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UniteenseignementService } from './uniteEnseignement.service';
import { CreateUniteEnseignementDto } from './dto/createUniteEnseignement';
import { UpdateUniteEnseignementDto } from './dto/updateUniteEnseignement';

@Controller('unite-enseignements')
export class UniteEnseignementController {
  constructor(private readonly uniteEnseignementService: UniteenseignementService) {}

  @Post()
  async createUniteEnseignement(@Body() createUniteEnseignementDto: CreateUniteEnseignementDto) {
    return this.uniteEnseignementService.createUniteEnseignement(createUniteEnseignementDto);
  }

  @Get(':id')
  async getUniteEnseignement(@Param('id', ParseIntPipe) id: number) {
    return this.uniteEnseignementService.getUniteEnseignement(id);
  }

  @Get()
  async getAllUniteEnseignements() {
    return this.uniteEnseignementService.getAllUniteEnseignements();
  }

  @Put(':id')
  async updateUniteEnseignement(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUniteEnseignementDto: UpdateUniteEnseignementDto,
  ) {
    return this.uniteEnseignementService.updateUniteEnseignement(updateUniteEnseignementDto, id);
  }

  @Delete(':id')
  async deleteUniteEnseignement(@Param('id', ParseIntPipe) id: number) {
    return this.uniteEnseignementService.deleteUniteEnseignement(id);
  }
}
