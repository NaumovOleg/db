import { Module } from '@nestjs/common';
import { UserController } from './controller';

@Module({
  controllers: [UserController],
  providers: [],
})
export class UserModule { }