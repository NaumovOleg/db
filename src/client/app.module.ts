import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router'
import { UserModule } from './user/user.module'
import { LoggerMiddleware } from './logger';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '/api',
    children: [
      {
        path: '/v1',
        children: [
          UserModule
        ]
      }
    ],
  },
];


@Module({
  imports: [
    RouterModule.forRoutes(routes),
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'api/v1/user', method: RequestMethod.ALL });
  }
}
