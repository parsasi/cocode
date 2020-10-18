import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Request } from './request.entity'

@Module({
  providers: [RequestService],
  controllers: [RequestController],
  imports : [TypeOrmModule.forFeature([Request])],

})
export class RequestModule {}
