
import { Schema, Model, model } from "mongoose";
import { hashSync, compareSync } from 'bcrypt';
import { User } from 'src/interfaces/user'


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
    this.hashedPassword = hashSync(password, 10);
  }).get(function () {
    return this.hashedPassword
  });

UserSchema.methods.comparePasswords = async function (password): Promise<boolean> {
  return compareSync(password, this.hashedPassword)
};

export { UserSchema }
