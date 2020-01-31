import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service'
import { User, SearchParam } from '../../interfaces/user'

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

  @GrpcMethod('UserController', 'createUser')
  async createUser(user: User, metadata: any): Promise<User> {
    return await this.userService.createUser(user)
  }

  @GrpcMethod('UserController', 'getUser')
  async getUser(searchParam: SearchParam, metadata: any): Promise<User> {
    console.log('=========', searchParam)
    return this.userService.getUser(searchParam.param)
  }
}