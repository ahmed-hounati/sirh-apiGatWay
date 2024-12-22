import { Module } from '@nestjs/common';
import { SirhService } from './sirh.service';
import { SirhController } from './sirh.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthServiceModule } from 'src/auth-service/auth-service.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'sirh-service',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      },
      {
        name: 'auth-service',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3002 },
      },
    ]),

    AuthServiceModule,
  ],
  controllers: [SirhController],
  providers: [SirhService],
})
export class SirhModule {}
