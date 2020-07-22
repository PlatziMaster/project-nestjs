import { PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Entity, ManyToMany, JoinTable } from 'typeorm';

import { User } from './user.entity';
import { Product } from './product.entity';

@Entity({ name: 'order' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @ManyToOne(type => User, user => user.orders)
  user: User;

  @ManyToMany(type => Product)
  @JoinTable()
  products: Product[];
}