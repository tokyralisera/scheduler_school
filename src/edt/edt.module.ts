import { Module } from '@nestjs/common';
import { EdtController } from './edt.controller';
import { EdtService } from './edt.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [EdtController],
  providers: [EdtService]
})
export class EdtModule {}
