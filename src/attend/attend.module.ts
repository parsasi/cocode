import { Module } from '@nestjs/common';
import { AttendService } from './attend.service';
import { AttendController } from './attend.controller';

@Module({
  providers: [AttendService],
  controllers: [AttendController]
})
export class AttendModule {}
