import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://oleg:hippi26@ds215093.mlab.com:15093/dental',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  ],
})
export class DbModule { }