import { AdvertiserEntity } from './serializers/advertiser.serializer';
import { AdvertisersService } from './advertisers.service';
export declare class AdvertisersController {
    private readonly service;
    constructor(service: AdvertisersService);
    get(id: string): Promise<AdvertiserEntity>;
    create(inputs: AdvertiserEntity): Promise<AdvertiserEntity>;
    update(id: string, inputs: AdvertiserEntity): Promise<AdvertiserEntity>;
}
