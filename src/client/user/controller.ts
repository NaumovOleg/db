import { Controller, Logger, Req, Param, Post, Get, All, Body, OnModuleInit } from '@nestjs/common';
import { UserGrpcService } from '../../interfaces/user';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { userGrpcClientOptions } from '../../options';
import { UserService } from './user.service'

@Controller()
export class UserController {

  constructor(private userService: UserService) { }

  @Post('user')
  createUser(@Body() user: any) {
    return this.userService.createUser(user);
  }

  @Get('user/:id')
  async getUser(@Param('id') id: any, @Req() req: any) {
    return this.userService.getUser(id);
  }
}