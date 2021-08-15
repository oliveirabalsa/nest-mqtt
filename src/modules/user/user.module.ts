import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { RedisService } from 'src/redis-service/redis-service.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  controllers: [UserController],
  providers: [UserService, RedisService],
})
export class UserModule {}
