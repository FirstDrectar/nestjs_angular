import { IUser, Role,Status } from '../interfaces/user.interface';
import { ModelEntity } from '../../../common/serializers/model.serializer';
export class UserEntity extends ModelEntity implements IUser {
  id: string;
  email: string;
  name: string;
  status:  Status;
  role:  Role;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
