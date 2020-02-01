
import { NestFactory, } from '@nestjs/core';
import { AppModule } from './app.module'
import { userGrpcOptions } from './options'

import { ExceptionFiltering } from './exception.handler'

async function runApp() {
  const app = await NestFactory.create(AppModule);

  await app.connectMicroservice(userGrpcOptions);
  app.useGlobalFilters(new ExceptionFiltering())
  app.startAllMicroservicesAsync();
  app.listen(3001);

}


runApp()