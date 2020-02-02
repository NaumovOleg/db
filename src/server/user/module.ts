import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service'
import { UserSchema } from '../../db/schemas/user';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserDb } from '../db.queries/user'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    PassportModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret',
      verifyOptions: {
        algorithms: ['HS256', 'HS384', 'HS512']
      },
      signOptions: { algorithm: 'HS256' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserDb],
})

export class UserModule { }