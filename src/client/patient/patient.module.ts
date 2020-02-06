import { Module } from '@nestjs/common';
import { PatientController } from 'src/client/patient/patient.controller';
import { PatientService } from 'src/client/patient/patient.service';

@Module({
  imports: [],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule { }