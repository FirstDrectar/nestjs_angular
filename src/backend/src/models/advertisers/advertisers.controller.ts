import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import {
  AdvertiserEntity
} from './serializers/advertiser.serializer';
import {
  AdvertisersService
} from './advertisers.service';
@Controller('advertisers')
export class AdvertisersController {
  constructor(private readonly service: AdvertisersService) {}
  @Get('/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  async get(
    @Param('id') id: string,
  ): Promise<AdvertiserEntity> {
    return await this.service.get(id);
  }
  @Post('/')
  @UseInterceptors(ClassSerializerInterceptor)
  async create(
    @Body() inputs: AdvertiserEntity,
  ): Promise<AdvertiserEntity> {
    return await this.service.create(inputs);
  }
  @Put('/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  async update(
    @Param('id') id: string,
    @Body() inputs: AdvertiserEntity,
  ): Promise<AdvertiserEntity> {
    return await this.service.update(id, inputs);
  }
}
