import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
      ClientsModule.register([
        {
          name: 'user-service',
          transport: Transport.TCP,
          options: {
            host: '127.0.0.1',
            port: 3002,
          },
        },
      ]),
    ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
