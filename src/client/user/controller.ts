import { Controller, Logger, Req, Param, Post, Get, Body, OnModuleInit } from '@nestjs/common';
import { UserGrpcService } from 'src/client/user/interfaces';
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
  createUser(@Body('user') user: any, @Body('data') data: any, ) {
    console.log('post user ', user);
    user.id = 'djcberdrehg'
    console.log(user)
    return this.grpcService.createUser(user);
  }


  @Get('user/:id')
  getUser(@Param('id') id: any, @Req() req: any) {
    console.log('Get user', { id });
    return this.grpcService.getUser({ id });
  }
}