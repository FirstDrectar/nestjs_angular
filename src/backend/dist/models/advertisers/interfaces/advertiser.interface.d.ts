export interface IAdvertiser {
    email: string;
    name: string;
    status: Status;
    managerId: string;
}
export declare enum Status {
    active = "active",
    inactive = "inactive"
}
