
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './../../../graphql';
import { User } from './../../../models/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  users: any[] = [];

  createUser(user: UserDto) {
    // console.log(user);
    this.users.push(user);
    return user;
  }

  getUsers() {
    return this.users;
  }

  updateUser(index: number, user) {
    this.users[index] = user;
  }

  getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async create(user: UserDto) {
    console.log('create');
    const newUser = new User();
    newUser.name = user.name;
    newUser.lastName = user.lastName;
    newUser.createDateTime = new Date();
    const rta = await this.usersRepository.save(newUser);
    console.log('create', rta);
    return rta;
  }

}
