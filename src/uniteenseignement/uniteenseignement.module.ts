import { Module } from '@nestjs/common';
import { UniteenseignementController } from './uniteenseignement.controller';
import { UniteenseignementService } from './uniteenseignement.service';

@Module({
  controllers: [UniteenseignementController],
  providers: [UniteenseignementService]
})
export class UniteenseignementModule {}
