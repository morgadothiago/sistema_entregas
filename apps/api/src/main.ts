import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  Logger,
  UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors = []) =>
        new UnprocessableEntityException(validationErrors),
    }),
  );

  const port = process.env.PORT || 3000;

  await app.listen(port, () => {
    new Logger().log(`Server is running on port ${port}`);
    //console.log(`Swagger UI: http://localhost:${port}/api`);
  });
}

bootstrap();
