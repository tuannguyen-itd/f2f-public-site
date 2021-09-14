import { baseService, IService, makeRequestUrl } from './base.service';
import { ICenter } from '@model/center.model';

interface ICenterService<T> extends IService<ICenter> {
  getTopCenters: (query: any) => Promise<{ data: T[] } | null>;
}

export const centerService: ICenterService<ICenter> = {
  ...baseService,
  apiPath: 'centers',
  v2Api: ['*'],

  async getEntities(page, size, sort, order, filters) {
    const baseUrl = this.getApiUrl('getEntities');
    const url = makeRequestUrl(baseUrl, page, size, sort, order, filters);
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      const total = +res.headers.get('x-total-count');
      return { data, total };
    }
    return null;
  },

  async getTopCenters(query) {
    const url = `${process.env.API_URL}/api/v2/centers/tops?query=${query || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return { data };
    }
    return null;
  },
};
