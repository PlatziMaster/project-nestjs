import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './../../models/order.entity';
import { User } from './../../models/user.entity';
import { Product } from './../../models/product.entity';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async create() {
    const newUser = new User();
    newUser.name = 'Nicolas 2';
    newUser.lastName = 'Molina 2';
    newUser.createDateTime = new Date();
    const user = await this.usersRepository.save(newUser);

    const newProduct = new Product();
    newProduct.name = 'Product 1';
    const product = await this.productsRepository.save(newProduct);

    // const newProduct2 = new Product();
    // newProduct2.name = 'Product 2';
    // const product2 = await this.productsRepository.save(newProduct2);

    const newOrder = new Order();
    newOrder.createDateTime = new Date();
    newOrder.user = user;
    newOrder.products = [product];

    const rta = await this.ordersRepository.save(newOrder);
    return rta;
  }
}
