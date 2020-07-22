import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UsersService } from './../services/users/users.service';
import { UserDto } from './../../graphql';

@Resolver('Users')
export class UsersResolver {

  constructor(
    private usersService: UsersService
  ) { }

  @Query('usersByRole')
  getUsersByRole(@Args('role') role: string) {
    return this.usersService.getAll();
  }

  @Query('allUsers')
  getAllUsers() {
    return this.usersService.getAll();
  }

  @Mutation('createUser')
  createUser(@Args('args') data: UserDto) {
    return this.usersService.create(data);
  }
}
