import { User } from './entities/user.entity';
import { ModelRepository } from '../model.repository';
import { UserEntity } from './serializers/user.serializer';
export declare class UsersRepository extends ModelRepository<User, UserEntity> {
    transform(model: User): UserEntity;
    transformMany(models: User[]): UserEntity[];
}
