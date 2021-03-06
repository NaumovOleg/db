import { Controller, Req, Param, Post, Get, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/client/user/user.service'

@Controller()
export class UserController {

  constructor(private userService: UserService) { }

  @Post('user')
  createUser(@Body() user: any) {
    return this.userService.createUser(user);
  }

  @Get('user/:id')
  @UseGuards(AuthGuard('jwt'))
  async getUser(@Param('id') id: any, @Req() req: any) {
    return this.userService.getUser(id);
  }

  @Post('/login')
  async login(@Body('email') email: string, @Body('password') password: string, ) {
    return this.userService.login({ email, password });
  }
}