import { UsersRepository } from './advertisers.repository';
import { UserEntity } from './serializers/advertiser.serializer';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    get(id: string, relations?: string[], throwsException?: boolean): Promise<UserEntity | null>;
    create(inputs: UserEntity): Promise<UserEntity>;
    update(id: string, inputs: UserEntity): Promise<UserEntity>;
}
