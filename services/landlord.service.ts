import { baseService, IService, makeRequestUrl } from './base.service';
import { ILandlord } from '@model/landlord.model';

interface ILandlordService<T> extends IService<ILandlord> {
  getTopLandlord: (query: any) => Promise<{ data: T[] } | null>;
  getRoomByLandlord: (id?: number | string, page?: number) => Promise<{ data: T[] } | null>;
}

export const landlordService: ILandlordService<ILandlord> = {
  ...baseService,
  apiPath: 'landlords',
  v2Api: ['*'],

  async getEntities(page, size, sort, order, filters) {
    const baseUrl = this.getApiUrl('getEntities'); /*api/v2/landlords*/
    const url = makeRequestUrl(baseUrl, page, size, sort, order, filters);
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      const total = +res.headers.get('x-total-count');
      return { data, total };
    }
    return null;
  },

  async getRoomByLandlord(id, page) {
    const url = `${process.env.API_URL}/api/v2/rooms-by-landlord/${id}?page=${page}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },

  async getTopLandlord(query) {
    const url = `${process.env.API_URL}/api/v2/courses/tops?query=${query || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return { data };
    }
    return null;
  }
};
