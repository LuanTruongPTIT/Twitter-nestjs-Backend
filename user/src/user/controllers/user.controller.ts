import { IUserSchema } from '../interface/user.interface';
import { UserService } from './../services/user.service';
import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { IUserCreateResponse } from '../interface/user-create-response.interface';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @MessagePattern('user_create')
  public async createUser(
    userParams: IUserSchema,
  ): Promise<IUserCreateResponse> {
    let result: IUserCreateResponse;
    if (userParams) {
      const userWithEmail = this.userService.searchUser({
        email: userParams.email,
      });
      if (userWithEmail) {
        result = {
          status: HttpStatus.CONFLICT,
          message: 'user_create_conflict',
          user: null,
          errors: {
            email: {
              message: 'Email already exists',
              path: 'email',
            },
          },
        };
      } else {
        const createdUser = await this.userService.createUser(userParams);
        result = {
          status: HttpStatus.CREATED,
          message: 'user_create_success',
          user: createdUser,
          errors: null,
        };
      }
    }
    return result;
  }
}
