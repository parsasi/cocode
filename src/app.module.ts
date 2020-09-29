import { Module , MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrontendModule } from './frontend/frontend.module';
import { ConfigModule } from '@nestjs/config';
import { FrontendMiddleware } from './common/middlewares/frontendMiddleware'
import { FrontendService } from './frontend/frontend.service'
import { FrontendController } from './frontend/frontend.controller'

@Module({
  imports: [FrontendModule , ConfigModule.forRoot({isGlobal: true,})],
  controllers: [AppController , FrontendController],
  providers: [AppService , FrontendService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes(FrontendController);
  }
}
