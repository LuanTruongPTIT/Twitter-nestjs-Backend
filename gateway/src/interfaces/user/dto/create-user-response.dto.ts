import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../user.interface';

export class CreateUserResponseDto {
  @ApiProperty({
    example: 'user_create_success',
  })
  message: string;
  @ApiProperty({
    example: {
      user: {
        email: 'luantruong@gmail.com',
        name: 'truong dinh kim luan',
        password: '103040940@luan',
      },
      nullable: true,
    },
  })
  data: {
    user: IUser;
    token: string;
  };
  @ApiProperty({
    example: null,
    nullable: true,
  })
  errors: { [key: string]: any };
}
