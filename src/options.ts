import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

const userOptions = {
  options: {
    url: 'localhost:5000',
    package: 'user',
    protoPath: join(__dirname, '../protoes/user.proto'),
  },
}
export const userGrpcOptions = {
  transport: Transport.GRPC,
  ...userOptions
};


export const userGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  ...userOptions
};