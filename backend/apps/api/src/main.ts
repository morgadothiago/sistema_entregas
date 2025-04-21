import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger, ValidationPipe } from "@nestjs/common";
import { exceptionFactory } from "./utils/fn";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory,
    }),
  );

  const port = process.env.PORT || 3000;

  await app.listen(port, () => {
    new Logger("MAIN").log(`Server is running on port ${port}`);
    //console.log(`Swagger UI: http://localhost:${port}/api`);
  });
}

bootstrap();
