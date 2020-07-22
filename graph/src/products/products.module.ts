import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsResolver } from './resolvers/products.resolver';
import { ProductsService } from './services/products.service';
import { OrdersService } from './services/orders.service';
import { OrdersResolver } from './resolvers/orders.resolver';

import { Order } from './../models/order.entity';
import { Product } from './../models/product.entity';
import { User } from './../models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Product, User])],
  providers: [ProductsResolver, ProductsService, OrdersService, OrdersResolver]
})
export class ProductsModule {}
