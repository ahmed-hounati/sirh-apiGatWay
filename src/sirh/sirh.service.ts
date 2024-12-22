import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SirhService {
  constructor(
    @Inject('sirh-service') private readonly sirhService: ClientProxy,
    @Inject('auth-service') private readonly authService: ClientProxy,
  ) {}

  async createOffer(data: any, token: string) {
    try {
        console.log(token);
        
      const userId = await this.authService
        .send({ cmd: 'getUserId' }, token)
        .toPromise();
      if (!userId) {
        throw new Error('User ID could not be retrieved.');
      }

      const allData = {
        userId,
        createOfferDto: data,
      };

      return this.sirhService.send({ cmd: 'create' }, allData).toPromise();
    } catch (error) {
      console.error('Error in createOffer:', error);
    }
  }
}

