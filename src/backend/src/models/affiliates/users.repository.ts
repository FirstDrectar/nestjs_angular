import { EntityRepository } from 'typeorm';
import { User } from './entities/user.entity';
import { ModelRepository } from '../model.repository';
import { UserEntity } from './serializers/user.serializer';
import { classToPlain, plainToClass } from 'class-transformer';
@EntityRepository(User)
export class UsersRepository extends ModelRepository<User, UserEntity> {
  transform(model: User): UserEntity {

    return plainToClass(
      UserEntity,
      classToPlain(model)
    );
  }
  transformMany(models: User[]): UserEntity[] {
    return models.map(model => this.transform(model));
  }
}
