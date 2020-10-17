import { Module } from '@nestjs/common';
import { TutorController } from './tutor.controller';

@Module({
  controllers: [TutorController]
})
export class TutorModule {}
