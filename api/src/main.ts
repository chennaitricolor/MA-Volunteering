import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as compression from 'compression';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
    cors: true,
  });

  const port = process.env.SERVER_PORT || 80;

  app.use(compression());
  app.use(helmet());

  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Volunteer Registration')
    .setDescription('The Volunteer Registration API description')
    .setVersion('1.0')
    .setBasePath('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
