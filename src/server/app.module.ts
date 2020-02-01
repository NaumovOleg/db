import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { UserModule } from './user/module';


@Module({
  imports: [
    DbModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class ServerAppModule { }
