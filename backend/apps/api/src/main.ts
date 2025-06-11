import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import type { OpenAPIObject } from "@nestjs/swagger";
import { Logger, ValidationPipe } from "@nestjs/common";
import { exceptionFactory } from "./utils/fn";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*",
    methods: "GET,PATCH,POST,DELETE",
    preflightContinue: false,
  });

  app.use(helmet());

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory,
    }),
  );

  const config: OpenAPIObject = {
    ...new DocumentBuilder()
      .setTitle("API")
      .setDescription("Documentação da API")
      .setVersion("1.0")
      .build(),
    paths: {},
  };

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("docs", app, document);

  const port = process.env.PORT || 3000;

  await app.listen(port, () => {
    new Logger("MAIN").log(`Server is running on port ${port}`);
    new Logger("Swagger UI").log(`http://localhost:${port}/docs`);
  });
}

bootstrap();
