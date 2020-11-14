import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'


async function bootstrap() {


  const configCORS = {
    origin : '*',
    methods: 'GET,POST,PUT,PATCH,DELETE',
    preflightContinue : false,
  }

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist : true
  }));

  const configService: ConfigService = app.get(ConfigService);

  const port = configService.get('PORT')

  const disableCORS = configService.get('DISABLE_CORS')

  if(disableCORS === "true")
  {
    app.enableCors(configCORS)
  }else{
    console.log(disableCORS)
  }

  await app.listen(port);
}
bootstrap();
