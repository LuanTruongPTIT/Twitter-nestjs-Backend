import * as mongoose from 'mongoose';
import { UserVerifyStatus } from '../constants/enums';
export const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  date_of_bith: Date,
  createdat: Date,
  updatedat: Date,
  email_verify_token: String,
  forgot_pawword_token: String,
  verify: UserVerifyStatus,
  bio: String,
  location: String,
  website: String,
  username: String,
  avatar: String,
  cover_photo: String,
});
