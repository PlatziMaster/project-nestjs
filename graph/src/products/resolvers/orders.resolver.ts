import { Resolver, Mutation } from '@nestjs/graphql';

import { OrdersService } from './../services/orders.service';

@Resolver('Orders')
export class OrdersResolver {

  constructor(
    private ordersService: OrdersService
  ) {}

  @Mutation('createOrder')
  createUser() {
    return this.ordersService.create();
  }
}
