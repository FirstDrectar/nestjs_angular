import { User } from './entities/advertiser.entity';
import { ModelRepository } from '../model.repository';
import { UserEntity } from './serializers/advertiser.serializer';
export declare class UsersRepository extends ModelRepository<User, UserEntity> {
    transform(model: User): UserEntity;
    transformMany(models: User[]): UserEntity[];
}
