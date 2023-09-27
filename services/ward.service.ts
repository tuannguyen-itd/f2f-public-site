import { baseService, IService, makeRequestUrl } from './base.service';
import { IWard } from '@model/ward.model';
import { SERVER_API_URL } from '../config/constants';

interface IWardService<T> extends IService<IWard> {
}

export const wardService: IWardService<IWard> = {
  ...baseService,
  apiPath: 'wards',

  async getEntities(page, size, sort, order, filters) {
    const baseUrl = 'http://localhost:8080/api/wards';
    const url = makeRequestUrl(baseUrl, page, size, sort, order, filters);
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      const total = +res.headers.get('x-total-count');
      return { data, total };
    }
    return null;
  },
  async getEntity(id) {
    const url = `http://localhost:8080/api/wards/${id}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },
};
