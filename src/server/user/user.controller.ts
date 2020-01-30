import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service'
import { User } from '../../interfaces/user'

export interface UserGrpcService {
  createUser(user: User): any;
  getUser(user: UserId): any;
}

export interface UserId {
  id: string;
}

@Controller()
export class UserController {
  private logger = new Logger('UserController');

  constructor(private userService: UserService) { }

  @GrpcMethod('UserController', 'getUser')
  getUser(id: UserId, metadata: any): User {

    let user = {
      name: 'Oleg',
      email: 'keep',
      password: id.id.toString(),
      surname: 'dddd',
      secondname: 'dddd'
    }
    return user;
  }


  @GrpcMethod('UserController', 'createUser')
  async createUser(user: User, metadata: any): Promise<User> {
    console.log(user);
    let userData = await this.userService.createUser(user)
    console.log(userData)
    return userData
  }
}