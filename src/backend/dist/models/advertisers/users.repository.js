"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const typeorm_1 = require("typeorm");
const advertiser_entity_1 = require("./entities/advertiser.entity");
const model_repository_1 = require("../model.repository");
const advertiser_serializer_1 = require("./serializers/advertiser.serializer");
const class_transformer_1 = require("class-transformer");
let UsersRepository = class UsersRepository extends model_repository_1.ModelRepository {
    transform(model) {
        return class_transformer_1.plainToClass(advertiser_serializer_1.UserEntity, class_transformer_1.classToPlain(model));
    }
    transformMany(models) {
        return models.map(model => this.transform(model));
    }
};
UsersRepository = __decorate([
    typeorm_1.EntityRepository(advertiser_entity_1.User)
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map