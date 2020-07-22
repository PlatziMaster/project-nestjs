import { Resolver, Mutation, Query } from '@nestjs/graphql';

import { OrdersService } from './../services/orders.service';

@Resolver('Orders')
export class OrdersResolver {

  constructor(
    private ordersService: OrdersService
  ) {}

  @Query('orders')
  getOrders() {
    return this.ordersService.getAll();
  }

  @Mutation('createOrder')
  createOrder() {
    return this.ordersService.create();
  }
}
