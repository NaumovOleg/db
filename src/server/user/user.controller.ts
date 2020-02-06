import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from 'src/server/user/user.service'
import { User, SearchParam, UserGrpcService, LoginData, UserId } from 'src/interfaces/user'

@Controller()
export class UserController {
  private logger = new Logger('UserController');

  constructor(private userService: UserService) { }

  @GrpcMethod('UserController', 'createUser')
  async createUser(user: User, metadata: any): Promise<User> {
    return this.userService.createUser(user)
  }

  @GrpcMethod('UserController', 'login')
  async login(loginData: LoginData, metadata: any): Promise<any> {
    return this.userService.login(loginData)
  }

  @GrpcMethod('UserController', 'getUser')
  async getUser(searchParam: SearchParam, metadata: any): Promise<User> {
    return this.userService.getUser(searchParam.param)
  }
}