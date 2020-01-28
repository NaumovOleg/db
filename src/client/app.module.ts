import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserModule } from './user/user.module'
import { LoggerMiddleware } from './logger';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.ALL });
  }
}
