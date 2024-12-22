import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    @Inject('auth-service') private readonly authService: ClientProxy,
  ) {}

  login(infos: string) {
    return this.authService.send({ cmd: 'login' }, infos).toPromise();
  }


  logout(token: string) {
    return this.authService.send({ cmd: 'logout' }, token).toPromise();
  }

}
