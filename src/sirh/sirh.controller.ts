import { Body, Controller, Headers, Post } from '@nestjs/common';
import { SirhService } from './sirh.service';

@Controller('sirh')
export class SirhController {
  constructor(private readonly sirhService: SirhService) {}

  @Post('offer/create')
  createOffer(@Headers('authorization') token: string, @Body() data: any) {
    try {
      return this.sirhService.createOffer(data, token);
    } catch (error) {
      return error;
    }
  }
}
