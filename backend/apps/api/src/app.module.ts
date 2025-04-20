import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { GpsModule } from "./gps/gps.module";

@Module({
  imports: [AuthModule, GpsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
