import { Module } from '@nestjs/common';
import { DatabasesModule } from '../databases/databases.module';
import { userProviders } from './providers/users.providers';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
@Module({
  imports: [DatabasesModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
