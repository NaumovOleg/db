
import { Schema, Model, model } from "mongoose";
import { hash, compare } from 'bcrypt';
import { User } from '../../interfaces/user'


const UserSchema = new Schema({
  name: String,
  surname: String,
  secondname: String,
  hashedPassword: String,
  email: {
    type: String,
    unique: true
  },
  createdAt: { type: Date, default: new Date() },
  roles: [],
});

UserSchema.virtual('password')
  .set(async function (password) {
    this.hashedPassword = await hash(password, 10)
  }).get(function () {
    return this.hashedPassword
  });


UserSchema.methods.comparePasswords = async (password): Promise<boolean> => {
  return await compare(password, this.hashedPassword)
};

export { UserSchema }
