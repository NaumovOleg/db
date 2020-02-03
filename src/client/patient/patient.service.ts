import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserGrpcService } from '../../interfaces/user';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { userGrpcClientOptions } from '../../options';


@Injectable()
export class PatientService implements OnModuleInit {

  @Client(userGrpcClientOptions)
  private client: ClientGrpc;

  private grpcService: UserGrpcService;

  onModuleInit() {

    console.log('kfrnjfnrjnffrnbfrbchrjbcchrvcrvhg')

  }

  createPatient(): number {
    return 3
  }
}