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
  UserEntity
} from './serializers/user.serializer';
import {
  UsersService
} from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  async get(
    @Param('id') id: string,
  ): Promise<UserEntity> {
    return await this.usersService.get(id);
  }
  @Post('/')
  @UseInterceptors(ClassSerializerInterceptor)
  async create(
    @Body() inputs: UserEntity,
  ): Promise<UserEntity> {
    return await this.usersService.create(inputs);
  }
  @Put('/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  async update(
    @Param('id') id: string,
    @Body() inputs: UserEntity,
  ): Promise<UserEntity> {
    return await this.usersService.update(id, inputs);
  }
}
