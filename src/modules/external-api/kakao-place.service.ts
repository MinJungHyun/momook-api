import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { KakaoApiServiceBase } from './kakao.api.service';

export type PlayautoInvoiceSenderArgs = {
  number: string;
  sender: string;
  senderno: string;
};

@Injectable()
export class KakaoPlaceService extends KakaoApiServiceBase {
  //상품 상세 조회
  search(keyword: string, format?: string): Promise<AxiosResponse> {
    if (keyword != undefined) {
      const FORMAT = format ?? 'json';
      const url = `/v2/local/search/keyword.${FORMAT}`;
      return this._fetcher(url, 'GET', { query: keyword });
    } else {
      return;
    }
  }

  //상품 목록 조회
  goodsz(): Promise<AxiosResponse> {
    const url = '/prods/info/lookupProd';
    return this._fetcher(url, 'GET', {});
  }

  //주문 단건
  order(masterOrderId: string): Promise<AxiosResponse> {
    if (masterOrderId != '') {
      const url = '/orders/' + masterOrderId;
      return this._fetcher(url, 'GET', {});
    } else {
      return;
    }
  }

  //주문 목록
  async orders(query?: any, allData?: boolean): Promise<AxiosResponse> {
    //TODO Production 일떄 statesYn : 'Y'
    const params = { startDate: '20221201', page: 1, statesYn: 'Y', count: 100000, ...query, states: '신규주문' };
    const url = '/orders';

    if (allData) {
      delete params.states;
      delete params.statesYn;
    }

    return this._fetcher(url, 'GET', params);
  }

  //주문cnt 조회
  async ordersCount(states?: string): Promise<number> {
    const url = '/orders/count';

    const params = states ? { states: states } : {};
    const res: Promise<AxiosResponse> = this._fetcher(url, 'GET', params);

    const count = res.then(e => {
      if (e.data.status == false) {
        return 0;
      }
      if (parseInt(e?.data?.count) > 0) {
        return parseInt(e?.data?.count);
      }
    });
    return count;
  }
}
