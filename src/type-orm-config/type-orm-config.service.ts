import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { TypeOrmOptionsFactory , TypeOrmModuleOptions } from '@nestjs/typeorm'

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(
        private configService : ConfigService
    ){}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get('mysql_host'),
            port: this.configService.get('mysql_port'),
            username: this.configService.get('mysql_username'),
            password: this.configService.get('mysql_password'),
            database: this.configService.get('mysql_dbname'),
            entities: [],
            synchronize: true,
            autoLoadEntities: true,
            keepConnectionAlive : false

        }
    }
}


