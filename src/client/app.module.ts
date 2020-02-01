import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module'
import { RoutesModule } from './routers';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './user/jwt.strategy'
@Module({
  imports: [
    RoutesModule,
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class ClientAppModule {
}
