export interface IUser {
    email: string;
    name: string;
    password: string;
    role: Role;
    status: Status;
}
export declare enum Role {
    admin = "admin",
    advertiserManager = "advertiserManager",
    affiliateManager = "affiliateManager"
}
export declare enum Status {
    active = "active",
    inactive = "inactive"
}
