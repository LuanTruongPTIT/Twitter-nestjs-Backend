import { UserVerifyStatus } from 'src/user/constants/enums';
import { Document } from 'mongoose';
export interface IUserSchema extends Document {
  email: string;
  password: string;
  name: string;
  date_of_birth: Date;
  created_at: Date;
  updated_at: Date;
  email_verify_token?: string;
  forgot_pawword_token?: string;
  verify?: typeof UserVerifyStatus;
  bio?: string;
  location?: string;
  website?: string;
  username?: string;
  avatar?: string;
  cover_photo?: string;
}
