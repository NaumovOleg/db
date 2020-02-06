
import { NestFactory, } from '@nestjs/core';
import { AppModule } from 'src/app.module'
import { userGrpcOptions } from 'src/options'

import { ExceptionFiltering } from 'src/exception.handler'

async function runApp() {
  const app = await NestFactory.create(AppModule);

  await app.connectMicroservice(userGrpcOptions);
  app.useGlobalFilters(new ExceptionFiltering())
  app.startAllMicroservicesAsync();
  app.listen(3001);

}


runApp()