import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';

import { PostgresProviderModule} from '../../providers/database/postgres/provider.module';
@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository]),PostgresProviderModule],
  providers: [UsersService],
  exports: [UsersService,TypeOrmModule.forFeature([UsersRepository])],
})
export class UsersModule {}
