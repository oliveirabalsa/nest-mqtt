import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import Cache from 'src/infra/redis/Cache';
import { REDIS_TIME_EXPIRATION } from './../config/Contants';

@Injectable()
export class RedisService {
  async execute(repository, method, key) {
    const cached = await Cache.get(key);

    const data = cached
      ? JSON.parse(cached.toString())
      : await repository[method]();

    if (!data) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    await Cache.set(key, JSON.stringify(data), REDIS_TIME_EXPIRATION);

    return data;
  }
}
