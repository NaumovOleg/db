import { Controller, Req, Param, Post, Get, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PatientService } from './patient.service'

@Controller()
export class PatientController {

  constructor(private patientService: PatientService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post('patient/:id')
  async getPatient(@Param('id') id: any, @Req() req: any) {
    return { patient: this.patientService.createPatient() }
  }
}