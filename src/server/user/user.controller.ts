import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service'

export interface UserGrpcService {
  createUser(user: User): any;
  getUser(user: UserId): any;
}

export interface User {
  name: string;
  email: string;
  password: string;
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
    }
    return user;
  }


  @GrpcMethod('UserController', 'createUser')
  createUser(userData: User, metadata: any): User {
    let user = {
      name: 'Oleg',
      email: 'keep',
      password: userData.toString(),
    }

    return {
      ...user, password: '' + this.userService.count()
    }
  }
}