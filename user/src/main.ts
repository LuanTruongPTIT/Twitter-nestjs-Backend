import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { ConfigService } from './user/config/config.services';
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('port'),
    },
  } as TcpOptions);
  await app.listen();
}
bootstrap();
