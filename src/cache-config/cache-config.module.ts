import { Module } from '@nestjs/common';
import { CacheConfigService  } from './cache-config.service'
import { ConfigModule } from '@nestjs/config'


@Module({
  providers: [CacheConfigService],
  imports : [ConfigModule]
})
export class CacheConfigModule {}
