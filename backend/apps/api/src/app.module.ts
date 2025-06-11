import { Module, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { GpsModule } from "./gps/gps.module";
import { AuthMiddleware } from "./auth/auth.middleware";
import { JwtModule } from "@nestjs/jwt";
import { VehicleTypeModule } from "./vehicle-type/vehicle-type.module";
import { UserModule } from "./user/user.module";
import { CacheService } from "./cache/cache.service";
import { RateLimitMiddleware } from "./rate-limit/rate-limit.middleware";

@Module({
  imports: [
    AuthModule,
    GpsModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        global: true,
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRATION },
      }),
    }),
    VehicleTypeModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, CacheService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: "/auth/*path", method: RequestMethod.ALL },
        { path: "/", method: RequestMethod.GET },
      )
      .forRoutes("*");

    consumer.apply(RateLimitMiddleware).forRoutes("*");
  }
}
