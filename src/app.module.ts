import { Module , MiddlewareConsumer , CacheModule , CacheInterceptor } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrontendModule } from './frontend/frontend.module';
import { ConfigModule } from '@nestjs/config';
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
import { APP_INTERCEPTOR  } from '@nestjs/core'
import { CacheConfigService } from './cache-config/cache-config.service'
import { CacheConfigModule } from './cache-config/cache-config.module';
import { TypeOrmConfigModule } from './type-orm-config/type-orm-config.module';
import { TypeOrmConfigService } from './type-orm-config/type-orm-config.service'
import { AwsModule } from './aws/aws.module';
import { AwsS3Module } from './aws-s3/aws-s3.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,}),
    TypeOrmModule.forRootAsync({useClass: TypeOrmConfigService}),
    UserModule,
    CategoryModule,
    RatingModule,
    BcryptModule,
    AuthModule,
    FrontendModule,
    CacheModule.registerAsync({useClass: CacheConfigService}),
    CacheConfigModule,
    TypeOrmConfigModule,
    AwsModule,
    AwsS3Module
  ],
  controllers: [AppController],
  providers: [
    AppService,
    FrontendService,
    TutorService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes(FrontendController);
  }
}
