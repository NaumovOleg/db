import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserModule } from './user/user.module'
import { LoggerMiddleware } from './logger';
import { RoutesModule } from './routers';

@Module({
  imports: [
    RoutesModule,
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
