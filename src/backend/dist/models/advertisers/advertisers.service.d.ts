import { AdvertiserRepository } from './advertisers.repository';
import { AdvertiserEntity } from './serializers/advertiser.serializer';
export declare class AdvertisersService {
    private readonly repository;
    constructor(repository: AdvertiserRepository);
    get(id: string, relations?: string[], throwsException?: boolean): Promise<AdvertiserEntity | null>;
    create(inputs: AdvertiserEntity): Promise<AdvertiserEntity>;
    update(id: string, inputs: AdvertiserEntity): Promise<AdvertiserEntity>;
}
