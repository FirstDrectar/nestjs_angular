"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelRepository = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const model_serializer_1 = require("../common/serializers/model.serializer");
class ModelRepository extends typeorm_1.Repository {
    async get(id, relations = [], throwsException = false) {
        return await this.findOne({
            where: { id },
            relations
        })
            .then(entity => {
            if (!entity && throwsException) {
                return Promise.reject(new common_1.NotFoundException('Model not found.'));
            }
            return Promise.resolve(entity ? this.transform(entity) : null);
        })
            .catch(error => Promise.reject(error));
    }
    async createEntity(inputs, relations = []) {
        return this.save(inputs)
            .then(async (entity) => await this.get(entity.id, relations))
            .catch(error => Promise.reject(error));
    }
    async updateEntity(id, inputs, relations = []) {
        return this.update(id, inputs)
            .then(async () => await this.get(id, relations))
            .catch(error => Promise.reject(error));
    }
    transform(model, transformOptions = {}) {
        return class_transformer_1.plainToClass(model_serializer_1.ModelEntity, model, transformOptions);
    }
    transformMany(models, transformOptions = {}) {
        return models.map(model => this.transform(model, transformOptions));
    }
}
exports.ModelRepository = ModelRepository;
//# sourceMappingURL=model.repository.js.map