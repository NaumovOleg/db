import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function runClient() {
  console.log('dddddd')
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}

export default runClient
