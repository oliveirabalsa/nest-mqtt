import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { RedisService } from '../../redis-service/redis-service.service';
import { REDIS_GET_ONE_USER_KEY } from 'src/config/Contants';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly redisService: RedisService,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.repository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.redisService.execute(
      this.repository,
      'find',
      REDIS_GET_ONE_USER_KEY,
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
