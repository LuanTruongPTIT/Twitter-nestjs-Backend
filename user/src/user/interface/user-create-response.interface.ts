import { IUserSchema } from './user.interface';
export interface IUserCreateResponse {
  status: number;
  message: string;
  user: IUserSchema | ' ';
  errors: { [key: string]: any } | null;
}
