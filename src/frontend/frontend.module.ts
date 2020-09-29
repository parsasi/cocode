import { Module } from '@nestjs/common';
import { FrontendService } from './frontend.service';
import { FrontendController } from './frontend.controller';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports : [ConfigModule],
  providers: [FrontendService],
  controllers: [FrontendController]
})
export class FrontendModule {}
