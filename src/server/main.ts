import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { userGrpcOptions } from '../options'


async function runServer() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(userGrpcOptions);
  await app.startAllMicroservicesAsync();

}

export default runServer
