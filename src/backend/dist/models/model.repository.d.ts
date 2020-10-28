import { Repository, DeepPartial } from 'typeorm';
import { ModelEntity } from '../common/serializers/model.serializer';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
export declare class ModelRepository<T, K extends ModelEntity> extends Repository<T> {
    get(id: string, relations?: string[], throwsException?: boolean): Promise<K | null>;
    createEntity(inputs: DeepPartial<T>, relations?: string[]): Promise<K>;
    updateEntity(id: string, inputs: QueryDeepPartialEntity<T>, relations?: string[]): Promise<K>;
    transform(model: T, transformOptions?: {}): K;
    transformMany(models: T[], transformOptions?: {}): K[];
}
