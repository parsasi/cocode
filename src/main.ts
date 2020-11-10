import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'


async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist : true
  }));

  const configService: ConfigService = app.get(ConfigService);

  const port = configService.get('PORT')

  await app.listen(port);
}
bootstrap();
