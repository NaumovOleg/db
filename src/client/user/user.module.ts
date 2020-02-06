import { Module } from '@nestjs/common';
import { UserController } from 'src/client/user/user.controller';
import { UserService } from 'src/client/user/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }