import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UsersService } from './../services/users/users.service';
import { UserDto } from './../../graphql';

@Resolver('Users')
export class UsersResolver {

  constructor(
    private usersService: UsersService
  ) {

  }

  @Query('usersByRole')
  getUsersByRole(@Args('role') role: string) {
    console.log(role);
    return this.usersService.getUsers();
  }

  @Query('users')
  getUsers() {
    return this.usersService.getAll();
  }

  @Mutation('createUser')
  createUser(@Args('args') data: UserDto) {
    console.log('resolver');
    return this.usersService.create(data);
  }
}
