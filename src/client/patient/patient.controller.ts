import { Controller, Req, Param, Post, Get, Body, UseGuards, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PatientService } from 'src/client/patient/patient.service'
import { RolesGuard } from 'src/client/roles.guard'

// export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Controller()
export class PatientController {

  constructor(private patientService: PatientService) { }

  @SetMetadata('roles', ['admin'])
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('patient/:id')
  async getPatient(@Param('id') id: any, @Req() req: any) {
    return { patient: this.patientService.createPatient() }
  }
}