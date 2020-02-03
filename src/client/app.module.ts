import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router'
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RolesGuard } from './roles.guard'
import { UserModule } from './user/user.module';
import { PatientModule } from './patient/patient.module'

import { JwtStrategy } from './jwt.strategy'

const Routers: Routes = [
  {
    path: '/api',
    children: [
      {
        path: '/v1',
        children: [
          UserModule,
          PatientModule
        ]
      }
    ],
  },
];


@Module({
  imports: [
    RouterModule.forRoutes(Routers),
    UserModule,
    PatientModule,


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
  controllers: [],
  providers: [JwtStrategy, RolesGuard],
})
export class ClientAppModule {
}
