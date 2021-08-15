import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  //   public async saveUser(createUser: User): Promise<User> {
  //     const user = await this.create(createUser);
  //     return this.save(user);
  //   }
  //   public async findAllUsers(createUser: User): Promise<User> {
  //     const user = await this.create(createUser);
  //     return this.save(user);
  //   }
}
