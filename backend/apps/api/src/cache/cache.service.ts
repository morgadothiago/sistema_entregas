import { Injectable, NotFoundException, OnModuleInit } from "@nestjs/common";
import Redis from "ioredis";

@Injectable()
export class CacheService implements OnModuleInit {
  private static redis: Redis;

  constructor() {
    CacheService.redis ??= new Redis({
      host: process.env.REDIS_HOST,
      port: +(process.env.REDIS_PORT || 0),
      password: process.env.REDIS_PASSWORD,
    });
  }

  onModuleInit() {
    ["REDIS_HOST", "REDIS_PORT", "REDIS_PASSWORD"].forEach((env) => {
      if (!process.env[env]) {
        throw new NotFoundException(`Missing environment variable: ${env}`);
      }
    });
  }

  async getValue(key: string) {
    return CacheService.redis.get(key);
  }

  async setValue(key: string, value: string) {
    return CacheService.redis.set(key, value);
  }

  async delete(key: string) {
    return CacheService.redis.del(key);
  }

  async setCache(
    key: string,
    value: string,
    time: number = 60 * 60 * 24, // 24 h
  ) {
    return CacheService.redis.multi().set(key, value).expire(key, time).exec();
  }
}
