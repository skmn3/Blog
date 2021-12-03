import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  
  const ServerConfig = config.get('server');
  const PORT = ServerConfig.port;
  await app.listen(PORT);
  logger.log(`Aplication running on PORT: ${PORT}`);
}
bootstrap();
