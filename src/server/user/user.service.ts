import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../interfaces/user'

// console.log(Types.ObjectId('ffff'))

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

    public async getUser(param: String): Promise<any> {
        const $or = [];
        $or.push({ email: param })
        if (Types.ObjectId.isValid(param)) {
            $or.push({ _id: param })
        }
        try { }
        let resp = await this.userModel.findOne({
            $or
        })
        console.log(resp)
        let user = { email: 'sssssss' }
        return null
    }
}
