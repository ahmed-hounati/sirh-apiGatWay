import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(
    @Inject('user-service') private readonly userService: ClientProxy,
  ) {}

  create(data: any) {
    return this.userService.send({ cmd: 'create' }, data).toPromise();
  }
}
