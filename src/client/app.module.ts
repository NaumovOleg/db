import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PatientModule } from './patient/patient.module'
import { RoutesModule } from './routers';
@Module({
  imports: [
    RoutesModule,
    PatientModule,
    UserModule,

  ],
  controllers: [],
  providers: [],
})
export class ClientAppModule {
}
