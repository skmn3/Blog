import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  
  const PORT = 4000;
  await app.listen(PORT);
  logger.log(`Aplication running on PORT: ${PORT}`);
}
bootstrap();
