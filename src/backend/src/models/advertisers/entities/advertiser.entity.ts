import { User } from 'src/models/users/entities/user.entity';
import {
  Entity,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IAdvertiser,Status } from '../interfaces/advertiser.interface';
@Entity({ name: 'users' })
export class Advertiser implements IAdvertiser {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  email: string;
  @Column()
  name: string;
  @ManyToOne(()=>User,user=>user.id)
  @Column('uuid')
  managerId: string;
  @Column()
  status: Status;
  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
