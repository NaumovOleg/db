import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserGrpcService } from '../../interfaces/user';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { userGrpcClientOptions } from '../../options';

@Injectable()
export class UserService implements OnModuleInit {

  @Client(userGrpcClientOptions)
  private client: ClientGrpc;

  private grpcService: UserGrpcService;

  constructor() { }

  onModuleInit() {
    this.grpcService = this.client.getService<UserGrpcService>('UserController');
  }

  public getAllUSers() {

  }

  public async createUser(user) {
    return this.grpcService.createUser(user);
  }

  getUser(param) {
    return this.grpcService.getUser({ param });
  }
}