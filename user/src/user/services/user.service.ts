import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IUserSchema } from '../interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL') private readonly userModel: Model<IUserSchema>,
  ) {}
  public async createUser(user: IUserSchema) {
    const userModel = await this.userModel.create(user);
    return userModel.save();
  }
  public async searchUser(params: { email: string }): Promise<IUserSchema[]> {
    return this.userModel.find(params).exec();
  }
}
