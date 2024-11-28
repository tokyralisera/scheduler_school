import { CreateMatiereDto } from './dto/createMatiereDto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MatiereService } from './matiere.service';
import { UpdateMatiereDto } from './dto/updateMatiereDto';

@Controller('matiere')
export class MatiereController {
    constructor(private readonly matiereService : MatiereService){}

    @Get()
    getAllMatiere() {
        return this.matiereService.getAllMatieres()
    }

    @Get()
    getMatiere(@Param(':id', ParseIntPipe) id : number){
        return this.matiereService.getMatiere(id)
    }

    @Post()
    createMatiere(@Body() createMatiereDto : CreateMatiereDto) {
        return this.matiereService.createMatiere(createMatiereDto)
    }

    @Put('/:id')
    updateMatiere(@Body() updateMatiere : UpdateMatiereDto, @Param('id', ParseIntPipe) id : number){
        return this.matiereService.updateMatiere(updateMatiere, id)
    }

    @Delete('/:id')
    deleteMatiere(@Param('id', ParseIntPipe) id : number){
        return this.matiereService.deleteMatiere(id)
    }
}
