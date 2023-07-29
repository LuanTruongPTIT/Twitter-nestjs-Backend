import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  // MinLength,
  // MaxLength,
  IsEmail,
  IsStrongPassword,
  IsString,
} from 'class-validator';
export class CreateUserDto {
  @ApiProperty({
    uniqueItems: true,
    example: 'luantruong@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty({
    example: 'Truong Dinh Kim Luan',
  })
  @IsString()
  name: string;
  @ApiProperty({
    uniqueItems: true,
    minLength: 6,
    maxLength: 20,
  })
  @IsStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minSymbols: 1,
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'zsfkfk4l3l5l',
  })
  @IsString()
  email_verify_token: string;
  @ApiProperty({
    example: 'forgot',
  })
  @IsString()
  forgot_password_token: string;
}
