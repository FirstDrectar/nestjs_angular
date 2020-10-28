import { Module } from '@nestjs/common';
import { AdvertisersService } from './advertisers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertiserRepository } from './advertisers.repository';

import { PostgresProviderModule} from '../../providers/database/postgres/provider.module';
@Module({
  imports: [TypeOrmModule.forFeature([AdvertiserRepository]),PostgresProviderModule],
  providers: [AdvertisersService],
  exports: [AdvertisersService,TypeOrmModule.forFeature([AdvertiserRepository])],
})
export class AdvertisersModule {}
