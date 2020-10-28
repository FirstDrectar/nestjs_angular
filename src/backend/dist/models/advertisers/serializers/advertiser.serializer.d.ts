import { IAdvertiser, Status } from '../interfaces/advertiser.interface';
import { ModelEntity } from '../../../common/serializers/model.serializer';
export declare class AdvertiserEntity extends ModelEntity implements IAdvertiser {
    id: string;
    name: string;
    email: string;
    status: Status;
    managerId: string;
    createdAt: Date;
    updatedAt: Date;
}
