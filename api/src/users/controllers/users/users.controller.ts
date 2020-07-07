import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './../../services/users/users.service';

@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
  ) {

  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  // @Get()
  // getUser() {
  //   return {};
  // }

  @Post()
  async create(@Body() user) {
    console.log(user);
    return this.usersService.createUser(user);
  }
}
