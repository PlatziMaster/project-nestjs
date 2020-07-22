
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

  getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async create(user: UserDto) {
    const newUser = new User();
    newUser.name = user.name;
    newUser.lastName = user.lastName;
    newUser.createDateTime = new Date();
    const rta = await this.usersRepository.save(newUser);
    return rta;
  }

}
