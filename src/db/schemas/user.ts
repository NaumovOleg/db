
import { Schema, Model, model } from "mongoose";
import { hashSync, compareSync } from 'bcrypt';
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
    let hashed = await hashSync(password, 10)
    this.hashedPassword = hashed;
  }).get(function () {
    return this.hashedPassword
  });


UserSchema.methods.comparePasswords = async (password): Promise<boolean> => {
  console.log('-------', password, this.hashedPassword)
  return await compareSync(password, this.hashedPassword)
};

export { UserSchema }
