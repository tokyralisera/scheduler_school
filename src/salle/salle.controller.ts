import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SalleService } from './salle.service';
import { CreateSalleDto } from './dto/createSalleDto';
import { UpdateSalleDto } from './dto/updateSalleDto';

@Controller('salle')
export class SalleController {
    constructor(private readonly salleService : SalleService) {}

    @Get()
    getAllSalle() {
        return this.salleService.getAllSalle()
    }

    @Get('/:id')
    getSalle(@Param('id', ParseIntPipe) id : number){
        return this.salleService.getSalle(id)
    }

    @Post()
    createSalle(@Body() createSalleDto : CreateSalleDto){
        return this.salleService.createSalle(createSalleDto)
    }

    @Put('/:id')
    updateSalle(@Body() updateSalleDto : UpdateSalleDto, @Param('id', ParseIntPipe) id: number) {
        return this.salleService.updateSalle(updateSalleDto, id)
    }

    @Delete('/:id')
    deleteSalle(@Param('id', ParseIntPipe) id : number) {
        return this.salleService.deleteSalle(id)
    }
}
