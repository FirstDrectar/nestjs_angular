import { IAdvertiser, Status } from '../interfaces/advertiser.interface';
export declare class Advertiser implements IAdvertiser {
    id: string;
    email: string;
    name: string;
    managerId: string;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
}
