import { NestFactory } from '@nestjs/core';
import * as config from 'config';
import { AppModule } from './app/app.module';
import { INestApplication } from '@nestjs/common';
import { LoggerService } from './utils/logger';
import { HttpExceptionFilter } from './utils/exceptions';

declare const module: any;

async function create() {
  const app: INestApplication = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });

  app.enableCors({
    origin: ['http://localhost'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  });

  app.useGlobalFilters(new HttpExceptionFilter());

  const ServerConfig = config.get('server');
  const PORT = ServerConfig.port;
  await app.listen(PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

create();
