// export enum UserVerifyStatus {
//   Unverfied,
//   Verified,
//   Banned,
// }
import * as mongoose from 'mongoose';
export const UserVerifyStatus = new mongoose.Schema({
  type: String,
  enum: ['unverified', 'verified', 'banned'],
});
