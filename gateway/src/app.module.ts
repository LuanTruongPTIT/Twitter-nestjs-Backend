import { Module } from '@nestjs/common';
import { UserController } from './user/ users.controller';
import { ConfigService } from './services/config/config.service';
import { ClientProxyFactory } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [UserController],
  providers: [
    ConfigService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        console.log(configService.get('userService'));
        const userServicesOption = configService.get('userService');
        return ClientProxyFactory.create(userServicesOption);
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
