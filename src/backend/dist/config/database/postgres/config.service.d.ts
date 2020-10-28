import { ConfigService } from '@nestjs/config';
export declare class PostgresConfigService {
    private configService;
    constructor(configService: ConfigService);
    get username(): string;
    get password(): string;
    get host(): string;
    get port(): number;
}
