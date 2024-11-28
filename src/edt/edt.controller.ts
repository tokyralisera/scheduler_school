import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EdtService } from './edt.service';
import { CreateEdtDto } from './dto/createEdtDto';
import { UpdateEdtDto } from './dto/updateEdtDto';

@Controller('emploi-de-temps')
export class EdtController {
  constructor(private readonly emploiDeTempsService: EdtService) {}

  @Post()
  create(@Body() createEmploiDeTempsDto: CreateEdtDto) {
    return this.emploiDeTempsService.create(createEmploiDeTempsDto);
  }

  @Get()
  findAll() {
    return this.emploiDeTempsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emploiDeTempsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmploiDeTempsDto: UpdateEdtDto) {
    return this.emploiDeTempsService.update(+id, updateEmploiDeTempsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emploiDeTempsService.remove(+id);
  }
}
