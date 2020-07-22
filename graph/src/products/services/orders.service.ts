import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './../../models/user.entity';
import { Product } from './../../models/product.entity';
import { Order } from './../../models/order.entity';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
    @InjectRepository(Product) private productsRepo: Repository<Product>,
    @InjectRepository(Order) private ordersRepo: Repository<Order>,
  ) {

  }

  async getAll() {
    const rta = await this.ordersRepo.find();
    console.log(rta);
    return rta;
  }

  async create() {
    const newUser = new User();
    newUser.name = 'Nicolas'
    newUser.lastName = 'Molina';
    newUser.createDateTime = new Date();
    const user = await this.usersRepo.save(newUser);

    const newProduct = new Product();
    newProduct.name = 'Product 1'
    newProduct.createDateTime = new Date();
    const product = await this.productsRepo.save(newProduct);

    const newProduct2 = new Product();
    newProduct2.name = 'Product 2'
    newProduct2.createDateTime = new Date();
    const product2 = await this.productsRepo.save(newProduct2);

    const newOrder = new Order();
    newOrder.createDateTime = new Date();
    newOrder.products = [product, product2];
    newOrder.user = user;
    const order = await this.ordersRepo.save(newOrder);
    console.log(order);
    return order;
  }
}
