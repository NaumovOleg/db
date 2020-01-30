import { Controller, Logger, Req, Param, Post, Get, All, Body, OnModuleInit } from '@nestjs/common';
import { UserGrpcService } from '../../interfaces/user';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { userGrpcClientOptions } from '../../options';

@Controller()
export class UserController implements OnModuleInit {


  @Client(userGrpcClientOptions)
  private client: ClientGrpc;

  private grpcService: UserGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<UserGrpcService>('UserController');
  }

  @Post('user')
  createUser(@Body() user: any) {
    return this.grpcService.createUser(user);
  }

  @Get('user/:id')
  getUser(@Param('id') id: any, @Req() req: any) {
    return this.grpcService.getUser({ id });
  }
}