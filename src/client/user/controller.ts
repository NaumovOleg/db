import { Controller, Logger, Req, Param, Post, Get, All, Body, OnModuleInit, UseFilters, HttpException } from '@nestjs/common';
import { UserGrpcService } from '../../interfaces/user';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { userGrpcClientOptions } from '../../options';
import { UserService } from './user.service'

@Controller()
export class UserController {

  constructor(private userService: UserService) { }

  @Post('user')
  // @UseFilters(new ExceptionFilter())
  createUser(@Body() user: any) {
    return this.userService.createUser(user);
  }

  @Get('user/:id')
  async getUser(@Param('id') id: any, @Req() req: any) {
    return this.userService.getUser(id);
  }

  @Post('/login')
  async login(@Body('email') email: string, @Body('password') password: string, ) {
    console.log('fvvnj4rnfvjt4rtbhj')
    return this.userService.login({ email, password });
  }
}