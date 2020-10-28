"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresProviderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_module_1 = require("../../../config/database/postgres/config.module");
const config_service_1 = require("../../../config/database/postgres/config.service");
const user_entity_1 = require("../../../models/users/entities/user.entity");
let PostgresProviderModule = class PostgresProviderModule {
};
PostgresProviderModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.PostgresConfigModule],
                useFactory: async (postgresConfigService) => {
                    return {
                        type: 'postgres',
                        host: postgresConfigService.host,
                        port: postgresConfigService.port,
                        username: postgresConfigService.username,
                        password: postgresConfigService.password,
                        synchronize: true,
                        autoLoadEntities: true,
                        entities: [
                            user_entity_1.User
                        ],
                    };
                },
                inject: [config_service_1.PostgresConfigService],
            }),
        ],
    })
], PostgresProviderModule);
exports.PostgresProviderModule = PostgresProviderModule;
//# sourceMappingURL=provider.module.js.map