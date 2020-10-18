import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Purchase } from './purchase.entity'

@Module({
  imports : [TypeOrmModule.forFeature([Purchase])],
  providers: [PurchaseService]
})
export class PurchaseModule {}
