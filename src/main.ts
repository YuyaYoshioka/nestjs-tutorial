import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AllExceptionFilter } from './all-exception.filter';
import { AppModule } from './app.module';
import { logger } from './cats/common/middleware/logger.middleware';
import { HttpExceptionFilter } from './http-exception.filter';
import { ValidationPipe } from './validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
