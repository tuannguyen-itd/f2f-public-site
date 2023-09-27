import { baseService, IService, makeRequestUrl } from './base.service';
import { IProvince } from '@model/province.model';

interface IProvinceService<T> extends IService<IProvince> {
}

export const provinceService: IProvinceService<IProvince> = {
  ...baseService,
  apiPath: 'provinces',

  async getEntities(page, size, sort, order, filters) {
    const baseUrl = 'http://localhost:8080/api/provinces';
    const url = makeRequestUrl(baseUrl, page, size, sort, order, filters);
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      const total = +res.headers.get('x-total-count');
      return { data, total };
    }
    return null;
  },

};
