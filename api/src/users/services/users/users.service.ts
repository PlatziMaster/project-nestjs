import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  users: any[] = [];

  createUser(user) {
    this.users.push(user);
    return user;
  }

  getUsers() {
    return this.users;
  }

  updateUser(index: number, user) {
    this.users[index] = user;
  }

}
