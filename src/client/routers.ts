import { RouterModule, Routes } from 'nest-router'
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './logger';

import { UserModule } from './user/user.module';
import { PatientModule } from './patient/patient.module'

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
    PatientModule
  ],
  controllers: [],
  providers: [],
})
export class RoutesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'api/v1/user', method: RequestMethod.ALL });
  }
}