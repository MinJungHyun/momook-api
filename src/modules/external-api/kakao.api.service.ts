import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class KakaoApiServiceBase {
  private readonly KAKAO_HOST = 'https://dapi.kakao.com';
  private readonly KAKAO_REST_API_KEY: string;
  constructor(private readonly httpService: HttpService) {
    this.KAKAO_REST_API_KEY = 'db35fe3e1b0987ad138e71275965dbd1';
  }
  _fetcher(url: string, method: string, params: object): Promise<AxiosResponse> {
    const api_url = this.KAKAO_HOST + url;

    const querystrings = Object.entries(params)
      .map(([key, value]) => {
        return `${key}=${encodeURIComponent(value)}`;
      })
      .join('&');
    console.log('@@@@', querystrings);

    // if (querystrings) {
    //   api_url += '?' + querystrings;
    // }
    console.log('Playauto-API :: ', api_url);

    if (method == 'GET') {
      return this.httpService
        .axiosRef(api_url, {
          method,
          params,
          headers: {
            Authorization: `KakaoAK ${this.KAKAO_REST_API_KEY}`
          }
        })
        .then(res => {
          return res;
        })
        .catch(err => {
          return err.response;
        });
    } else if (method == 'PATCH') {
      return this.httpService.axiosRef
        .patch(api_url, params, {
          headers: {
            Authorization: `KakaoAK ${this.KAKAO_REST_API_KEY}`
          }
        })
        .then(res => {
          return res;
        })
        .catch(err => {
          return err.response;
        });
    } else {
      return this.httpService
        .axiosRef(api_url, {
          method,
          headers: {
            Authorization: `KakaoAK ${this.KAKAO_REST_API_KEY}`
          }
        })
        .then(res => {
          return res;
        })
        .catch(err => {
          return err.response;
        });
    }
  }
}
