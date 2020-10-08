import {CacheOptionsFactory , CacheModuleOptions , Injectable} from '@nestjs/common'
import * as redisStore from 'cache-manager-redis-store';
import { ConfigService } from '@nestjs/config'

@Injectable()
export class CacheConfigService implements CacheOptionsFactory {
  constructor(
    private configService : ConfigService
  ){}
  createCacheOptions(): CacheModuleOptions {
    return  {
        ttl: 10, 
        max: 20,
        store: redisStore,
        host: this.configService.get('redis_host'),
        port: this.configService.get('redis_port'),
        user : this.configService.get('redis_user'),
        password : this.configService.get('redis_password')
      }
  }
}

