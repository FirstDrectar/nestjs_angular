import { UsersRepository } from './users.repository';
import { UserEntity } from './serializers/user.serializer';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    get(id: string, relations?: string[], throwsException?: boolean): Promise<UserEntity | null>;
    create(inputs: UserEntity): Promise<UserEntity>;
    update(id: string, inputs: UserEntity): Promise<UserEntity>;
}
