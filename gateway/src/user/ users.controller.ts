import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  // Injectable,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from '../interfaces/user/dto/create-user.dto';
import { CreateUserResponseDto } from '../interfaces/user/dto/create-user-response.dto';
import { IServiceUserCreateResponse } from '../interfaces/user/service-user-create-response';
import { firstValueFrom } from 'rxjs';
@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}
  @Post()
  public async createUser(
    @Body() userRequest: CreateUserDto,
  ): Promise<CreateUserResponseDto> {
    const createUserResponse: IServiceUserCreateResponse = await firstValueFrom(
      this.userServiceClient.send('user-create', userRequest),
    );
    if (createUserResponse.status !== HttpStatus.CREATED) {
      throw new HttpException(
        {
          message: createUserResponse.message,
          data: null,
          errors: createUserResponse.errors,
        },
        createUserResponse.status,
      );
    }
    return {
      message: 'Create User success',
      data: {
        user: createUserResponse.user,
        token: '3830953905903jgjfj',
      },
      errors: null,
    };
  }
}
