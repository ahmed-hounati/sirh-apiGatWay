import { Body, Controller, Headers, Post } from '@nestjs/common';
import { AuthService } from './auth-service.service';

@Controller('auth')
export class AuthServiceController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() infos: string) {
    try {
      return this.authService.login(infos);
    } catch (error) {
      return error;
    }
  }

  @Post('logout')
  async logout(@Headers('authorization') token: string) {
    try {
      return this.authService.logout(token);
    } catch (error) {
      return error;
    }
  }
}
