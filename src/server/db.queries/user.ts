import { Injectable, HttpException, Catch } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../interfaces/user'

@Injectable()
export class UserDb {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>
  ) { }

  public getUser(searchParam): Promise<User> {
    const $or = [];
    $or.push({ email: searchParam })
    if (Types.ObjectId.isValid(searchParam)) {
      $or.push({ _id: searchParam })
    }
    return this.userModel.findOne({
      $or
    })

  }
}