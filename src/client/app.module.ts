import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module'
import { RoutesModule } from './routers';
@Module({
  imports: [
    RoutesModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class ClientAppModule {
}
