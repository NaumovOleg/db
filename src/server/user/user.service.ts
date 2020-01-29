import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../interfaces/user'

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly catModel: Model<User>) { }
    public accumulate(data: number[]): number {
        return (data || []).reduce((a, b) => Number(a) + Number(b));
    }
    public count(): number {
        let a = 0

        return a
    }
}
