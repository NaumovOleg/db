import { Controller, Req, Param, Post, Get, All, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service'

@Controller()
export class UserController {

  constructor(private userService: UserService) { }

  // @UseGuards(AuthGuard('jwt'))
  @Post('user')
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