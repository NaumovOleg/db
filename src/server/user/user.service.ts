import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../interfaces/user'

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
    public getAllUSers(): number {
        return this.userModel.find({})
    }

    public async createUser(user: User): Promise<User> {
        let userSaves = new this.userModel(user);
        return userSaves.save()
    }
}

