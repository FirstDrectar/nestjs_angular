import { IUser, Status, Role } from '../interfaces/user.interface';
export declare class User implements IUser {
    id: string;
    email: string;
    name: string;
    password: string;
    role: Role;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
}
