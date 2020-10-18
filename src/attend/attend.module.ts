import { Module } from '@nestjs/common';
import { AttendService } from './attend.service';
import { AttendController } from './attend.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Attend } from './attend.entity'

@Module({
  providers: [AttendService],
  controllers: [AttendController],
  imports : [TypeOrmModule.forFeature([Attend])],
})
export class AttendModule {}
