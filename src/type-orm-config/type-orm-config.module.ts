import { Module } from '@nestjs/common';
import { TypeOrmConfigService } from './type-orm-config.service';
import { ConfigModule } from '@nestjs/config'
@Module({
  providers: [TypeOrmConfigService],
  imports : [ConfigModule]
})
export class TypeOrmConfigModule {}
