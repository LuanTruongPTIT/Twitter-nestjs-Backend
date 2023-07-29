import { UserVerifyStatus } from '../../enum/user/enum_user';
export interface IUser {
  password: string;
  name: string;
  date_of_birth: Date;
  created_at: Date;
  updated_at: Date;
  email_verify_token?: string;
  forgot_pawword_token?: string;
  verify?: UserVerifyStatus;
  bio?: string;
  location?: string;
  website?: string;
  username?: string;
  avatar?: string;
  cover_photo?: string;
}
