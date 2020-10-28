import { Advertiser } from './entities/advertiser.entity';
import { ModelRepository } from '../model.repository';
import { AdvertiserEntity } from './serializers/advertiser.serializer';
export declare class AdvertiserRepository extends ModelRepository<Advertiser, AdvertiserEntity> {
    transform(model: Advertiser): AdvertiserEntity;
    transformMany(models: Advertiser[]): AdvertiserEntity[];
}
