
import { Schema, Model, model } from "mongoose";
import { hash, compare } from 'bcrypt';
import { User } from '../../interfaces/user'


const UserSchema = new Schema({
  name: String,
  surname: String,
  secondname: String,
  email: {
    type: String,
    unique: true
  },
  createdAt: Date,
  roles: [],
});

UserSchema.virtual('hashedpassword').get(async function () {
  let hashed = await hash(this.password, 10)
  console.log('----------------', hashed)
  return hashed
});

UserSchema.pre('save', () => {
  console.log('------,', this)
})

UserSchema.methods.comparePasswords = async (password): Promise<boolean> => {
  return await compare(password, this.password)
};

export { UserSchema }
