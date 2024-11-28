import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ClasseService } from './classe.service';
import { CreateClasseDto } from './dto/createClasseDto';
import { UpdateClasseDto } from './dto/updateClasseDto';

@Controller('classe')
export class ClasseController {
  constructor(private readonly classeService: ClasseService) {}

  @Get()
  getAllClasse() {
    return this.classeService.getAllClasse();
  }

  @Get('/:id')
  getClasse(@Param('id', ParseIntPipe) id: number) {
    return this.classeService.getClasse(id);
  }

  @Post()
  createClasse(@Body() createClasseDto: CreateClasseDto) {
    return this.classeService.createClasse(createClasseDto);
  }

  @Put('/:id')
  updateClasse(
    @Body() updateClasseDto: UpdateClasseDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.classeService.updateClasse(updateClasseDto, id);
  }

  @Delete('/:id')
  deleteClasse(@Param('id', ParseIntPipe) id: number) {
    return this.classeService.deleteClasse(id);
  }
}
