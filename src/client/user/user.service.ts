import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserGrpcService } from 'src/interfaces/user';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { userGrpcClientOptions } from 'src/options';

@Injectable()
export class UserService implements OnModuleInit {

  @Client(userGrpcClientOptions)
  private client: ClientGrpc;

  private grpcService: UserGrpcService;

  constructor() { }

  onModuleInit() {
    this.grpcService = this.client.getService<UserGrpcService>('UserController');
  }

  createUser(user) {
    return this.grpcService.createUser(user);
  }

  login(logindata) {
    return this.grpcService.login(logindata);
  }

  getUser(param) {
    return this.grpcService.getUser({ param });
  }
}