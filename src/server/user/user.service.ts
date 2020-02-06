import { Injectable, HttpException, Catch } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/interfaces/user'
import { RpcException } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { UserDb } from 'src/db/db.queries/user'
import { userGrpcOptions } from 'src/options';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        private readonly jwt: JwtService,
        private userQuery: UserDb

    ) { }
    public getAllUSers(): number {
        return this.userModel.find({})
    }

    public async login({ email, password }) {
        try {
            let user = await this.userQuery.getUser(email);
            if (!user || !await user.comparePasswords(password)) {
                throw new HttpException("Unauthorized", 404)
            }
            let token = await this.jwt.signAsync({
                name: user.name,
                email: user.email,
                surname: user.surname,
                secondname: user.secondname,
                roles: user.roles
            })

            return { token }

        } catch (err) {
            throw new RpcException({ message: err.message, code: err.status })
        }

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
