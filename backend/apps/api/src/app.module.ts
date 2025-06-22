import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { GpsModule } from "./gps/gps.module";
import { AuthMiddleware } from "./auth/auth.middleware";
import { JwtModule } from "@nestjs/jwt";
import { VehicleTypeModule } from "./vehicle-type/vehicle-type.module";
import { DeliveryModule } from "./delivery/delivery.module";
import { LocationService } from "./location/location.service";
import { UserModule } from "./user/user.module";
import { CacheService } from "./cache/cache.service";
import { RateLimitMiddleware } from "./rate-limit/rate-limit.middleware";
import { BillingModule } from "./billing/billing.module";

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
    DeliveryModule,
    UserModule,
    BillingModule,
  ],
  controllers: [AppController],
  providers: [AppService, CacheService, LocationService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: "/auth/*path", method: RequestMethod.ALL },
        { path: "/vehicle-types", method: RequestMethod.GET },
        { path: "/", method: RequestMethod.GET },
      )
      .forRoutes("*");

    consumer.apply(RateLimitMiddleware).forRoutes("*");
  }
}
