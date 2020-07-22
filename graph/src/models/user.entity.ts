import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity, OneToMany } from 'typeorm';

import { Order } from './order.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  lastName: string;

  @OneToMany(type => Order, order => order.user)
  orders: Order[];
}