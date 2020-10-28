import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { PostgresConfigModule } from '../../../config/database/postgres/config.module';
import { PostgresConfigService } from '../../../config/database/postgres/config.service';
import {User} from '../../../models/users/entities/user.entity'
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      useFactory: async (postgresConfigService: PostgresConfigService) =>
      {

          return {
            type: 'postgres' as DatabaseType,
            host: postgresConfigService.host,
            port: postgresConfigService.port,
            username: postgresConfigService.username,
            password: postgresConfigService.password,
            synchronize: true,
            autoLoadEntities: true,
            entities: [
              User
            ],
          }
        },
      inject: [PostgresConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgresProviderModule {}
