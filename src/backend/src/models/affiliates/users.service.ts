import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { UserEntity } from './serializers/user.serializer';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}
  async get(
    id: string,
    relations: string[] = [],
    throwsException = false,
  ): Promise<UserEntity | null> {
    return await this.usersRepository.get(id, relations, throwsException);
  }
  async create(
    inputs: UserEntity,
  ): Promise<UserEntity> {
    return await this.usersRepository.createEntity(inputs);
  }
  async update(
    id: string,
    inputs: UserEntity,
  ): Promise<UserEntity> {
    return await this.usersRepository.updateEntity(id,inputs);
  }
}

