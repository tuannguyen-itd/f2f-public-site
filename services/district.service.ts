import { baseService, IService, makeRequestUrl } from './base.service';
import { IDistrict } from '@model/district.model';

interface IDistrictService<T> extends IService<IDistrict> {
  getApiUrl(funcName: any): string;
}

export const districtService: IDistrictService<IDistrict> = {
  ...baseService,
  apiPath: 'districts',

  async getEntities(page, size, sort, order, filters) {
    const baseUrl = 'http://localhost:8080/api/districts';
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
