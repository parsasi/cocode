import { Module , MiddlewareConsumer  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrontendModule } from './frontend/frontend.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { FrontendMiddleware } from './common/middlewares/frontendMiddleware'
import { FrontendService } from './frontend/frontend.service'
import { FrontendController } from './frontend/frontend.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { RatingModule } from './rating/rating.module';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { AuthModule } from './auth/auth.module';
import { TutorService } from './user/tutor.service';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,}),
    TypeOrmModule.forRootAsync({
      imports : [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('mysql_host'),
        port: configService.get('mysql_port'),
        username: configService.get('mysql_username'),
        password: configService.get('mysql_password'),
        database: configService.get('mysql_dbname'),
        entities: [],
        synchronize: true,
        autoLoadEntities: true,
        keepConnectionAlive : false
      }),
      inject: [ConfigService],
    }),
    UserModule,
    CategoryModule,
    RatingModule,
    BcryptModule,
    AuthModule,
    FrontendModule,
  ],
  controllers: [AppController],
  providers: [AppService , FrontendService, TutorService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes(FrontendController);
  }
}
