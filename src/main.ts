import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './cats/common/middleware/logger.middleware';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
