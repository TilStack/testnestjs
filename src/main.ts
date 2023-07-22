import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist:true,//Afficher uniquement ce qui est dans le modele malgré autre chose quon ajoute dans le body de la requete,
      forbidNonWhitelisted:true
    }
  ))
  await app.listen(3000);
}
bootstrap();
