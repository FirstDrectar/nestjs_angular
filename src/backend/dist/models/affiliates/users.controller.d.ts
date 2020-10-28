import { UserEntity } from './serializers/user.serializer';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    get(id: string): Promise<UserEntity>;
    create(inputs: UserEntity): Promise<UserEntity>;
    update(id: string, inputs: UserEntity): Promise<UserEntity>;
}
