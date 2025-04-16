import { NestFactory } from '@nestjs/core';
import { NotificationModule } from './notification.module';

async function bootstrap() {
  console.log(process.env);
  const app = await NestFactory.create(NotificationModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
