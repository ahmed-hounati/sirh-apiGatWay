import { Module } from '@nestjs/common';
import { AuthService } from './auth-service.service';
import { AuthServiceController } from './auth-service.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'auth-service',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [AuthServiceController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthServiceModule {}
