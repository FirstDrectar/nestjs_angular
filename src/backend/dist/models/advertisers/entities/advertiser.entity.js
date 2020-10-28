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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Advertiser = void 0;
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const advertiser_interface_1 = require("../interfaces/advertiser.interface");
let Advertiser = class Advertiser {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Advertiser.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Advertiser.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Advertiser.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, user => user.id),
    typeorm_1.Column('uuid'),
    __metadata("design:type", String)
], Advertiser.prototype, "managerId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Advertiser.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], Advertiser.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], Advertiser.prototype, "updatedAt", void 0);
Advertiser = __decorate([
    typeorm_1.Entity({ name: 'users' })
], Advertiser);
exports.Advertiser = Advertiser;
//# sourceMappingURL=advertiser.entity.js.map