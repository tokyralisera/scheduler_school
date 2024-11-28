import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ProfesseurService } from './professeur.service';
import { CreateProfesseurDto } from './dto/createProfesseurDto';
import { UpdateProfesseurDto } from './dto/updateProfesseurDto';

@Controller('professeurs')
export class ProfesseurController {
  constructor(private readonly professeurService: ProfesseurService) {}

  @Post()
  async createProfesseur(@Body() createProfesseurDto: CreateProfesseurDto) {
    return this.professeurService.createProfesseur(createProfesseurDto);
  }

  @Get(':id')
  async getProfesseur(@Param('id', ParseIntPipe) id: number) {
    return this.professeurService.getProfesseur(id);
  }

  @Get()
  async getAllProfesseurs() {
    return this.professeurService.getAllProfesseurs();
  }

  @Put(':id')
  async updateProfesseur(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProfesseurDto: UpdateProfesseurDto,
  ) {
    return this.professeurService.updateProfesseur(updateProfesseurDto, id);
  }

  @Delete(':id')
  async deleteProfesseur(@Param('id', ParseIntPipe) id: number) {
    return this.professeurService.deleteProfesseur(id);
  }
}
