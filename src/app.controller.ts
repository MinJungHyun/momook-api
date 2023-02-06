import { Controller, Get } from '@nestjs/common';
import { KakaoPlaceService } from './modules/external-api/kakao-place.service';

@Controller()
export class AppController {
  constructor(private readonly kakaoPlaceService: KakaoPlaceService) {}

  @Get('/search')
  async getHello(): Promise<string> {
    const res = await this.kakaoPlaceService.search('판교집');
    console.log('@@@@', res.data);

    return '1';
  }
}
