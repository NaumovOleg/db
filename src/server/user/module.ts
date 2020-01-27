import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MathService } from './math.service'
@Module({
  controllers: [UserController],
  providers: [MathService],
})
export class UserModule { }