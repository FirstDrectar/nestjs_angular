"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisersController = void 0;
const common_1 = require("@nestjs/common");
const advertiser_serializer_1 = require("./serializers/advertiser.serializer");
const advertisers_service_1 = require("./advertisers.service");
let AdvertisersController = class AdvertisersController {
    constructor(service) {
        this.service = service;
    }
    async get(id) {
        return await this.service.get(id);
    }
    async create(inputs) {
        return await this.service.create(inputs);
    }
    async update(id, inputs) {
        return await this.service.update(id, inputs);
    }
};
__decorate([
    common_1.Get('/:id'),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdvertisersController.prototype, "get", null);
__decorate([
    common_1.Post('/'),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [advertiser_serializer_1.AdvertiserEntity]),
    __metadata("design:returntype", Promise)
], AdvertisersController.prototype, "create", null);
__decorate([
    common_1.Put('/:id'),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, advertiser_serializer_1.AdvertiserEntity]),
    __metadata("design:returntype", Promise)
], AdvertisersController.prototype, "update", null);
AdvertisersController = __decorate([
    common_1.Controller('advertisers'),
    __metadata("design:paramtypes", [advertisers_service_1.AdvertisersService])
], AdvertisersController);
exports.AdvertisersController = AdvertisersController;
//# sourceMappingURL=advertisers.controller.js.map