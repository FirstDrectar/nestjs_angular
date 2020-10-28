import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class PostgresConfigService {
  constructor(private configService: ConfigService) {}

  get username(): string {
    return this.configService.get<string>('database.username');
  }
  get password(): string {
    return this.configService.get<string>('database.password');
  }
  get host(): string {
    return this.configService.get<string>('database.host');
  }
  get port(): number {
   return Number(this.configService.get<number>('database.port'));
  }
}
