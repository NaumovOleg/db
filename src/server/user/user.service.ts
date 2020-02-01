import { Injectable, HttpException, Catch } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../interfaces/user'
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
    public getAllUSers(): number {
        return this.userModel.find({})
    }

    public login({ email, password }) {
        console.log(email, password)
        return { token: 'dcmofrjcnrjkcjkr' }
    }

    public async createUser(user: User): Promise<User> {
        try {
            return await this.userModel(user).save()
        } catch (err) {
            if (err.code) {
                throw new RpcException({ message: 'This email already exists', code: 7 })
            }
            throw new RpcException({ message: err.message, code: 7 })
        }
    }

    public async getUser(param: String): Promise<User> {
        const $or = [];
        $or.push({ email: param })
        if (Types.ObjectId.isValid(param)) {
            $or.push({ _id: param })
        }
        try {
            let userData = await this.userModel.findOne({
                $or
            })
            return userData
        } catch (err) {
            throw new RpcException({ message: err.message })
        }
    }
}
