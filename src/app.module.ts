import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthServiceModule } from './auth-service/auth-service.module';
import { UserModule } from './user/user.module';
import { SirhModule } from './sirh/sirh.module';

@Module({
  imports: [AuthServiceModule, UserModule, SirhModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
