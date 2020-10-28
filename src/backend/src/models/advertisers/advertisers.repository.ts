import { EntityRepository } from 'typeorm';
import { Advertiser } from './entities/advertiser.entity';
import { ModelRepository } from '../model.repository';
import { AdvertiserEntity } from './serializers/advertiser.serializer';
import { classToPlain, plainToClass } from 'class-transformer';
@EntityRepository(Advertiser)
export class AdvertiserRepository extends ModelRepository<Advertiser, AdvertiserEntity> {
  transform(model: Advertiser): AdvertiserEntity {

    return plainToClass(
      AdvertiserEntity,
      classToPlain(model)
    );
  }
  transformMany(models: Advertiser[]): AdvertiserEntity[] {
    return models.map(model => this.transform(model));
  }
}
