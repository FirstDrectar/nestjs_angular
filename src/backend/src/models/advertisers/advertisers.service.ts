import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdvertiserRepository } from './advertisers.repository';
import { AdvertiserEntity } from './serializers/advertiser.serializer';
@Injectable()
export class AdvertisersService {
  constructor(
    @InjectRepository(AdvertiserRepository)
    private readonly repository: AdvertiserRepository,
  ) {}
  async get(
    id: string,
    relations: string[] = [],
    throwsException = false,
  ): Promise<AdvertiserEntity | null> {
    return await this.repository.get(id, relations, throwsException);
  }
  async create(
    inputs: AdvertiserEntity,
  ): Promise<AdvertiserEntity> {
    return await this.repository.createEntity(inputs);
  }
  async update(
    id: string,
    inputs: AdvertiserEntity,
  ): Promise<AdvertiserEntity> {
    return await this.repository.updateEntity(id,inputs);
  }
}

