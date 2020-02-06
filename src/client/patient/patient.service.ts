import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserGrpcService } from 'src/interfaces/user';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { userGrpcClientOptions } from 'src/options';


@Injectable()
export class PatientService implements OnModuleInit {

  @Client(userGrpcClientOptions)
  private client: ClientGrpc;

  private grpcService: UserGrpcService;

  onModuleInit() { }

  createPatient(): number {
    return 3
  }
}