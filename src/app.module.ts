import { Module } from '@nestjs/common';
import { ClientAppModule } from './client/app.module'
import { ServerAppModule } from './server/app.module'

import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './client/user/jwt.strategy'


@Module({
  imports: [
    ClientAppModule,
    ServerAppModule,
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.register({
    //   secret: 'secret',
    //   verifyOptions: {
    //     algorithms: ['SHA256', 'SHA-256', 'HS256']
    //   },
    //   signOptions: { expiresIn: '60s', algorithm: 'HS256' },
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}