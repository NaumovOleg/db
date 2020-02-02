import { Module } from '@nestjs/common';
import { ClientAppModule } from './client/app.module'
import { ServerAppModule } from './server/app.module'

@Module({
  imports: [
    ClientAppModule,
    ServerAppModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }