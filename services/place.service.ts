import { baseService, IService, makeRequestUrl } from './base.service';
import { IPlace } from '@model/place.model';

interface IPlaceService<T> extends IService<IPlace> {
  getTopPlace: (query: any) => Promise<{ data: T[] } | null>;
}

export const placeService: IPlaceService<IPlace> = {
  ...baseService,
  apiPath: 'place',
  v2Api: ['*'],

  async getEntities(page, size, sort, order, filters) {
    const baseUrl = this.getApiUrl('getEntities'); /*api/v2/place*/
    const url = makeRequestUrl(baseUrl, page, size, sort, order, filters);
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      const total = +res.headers.get('x-total-count');
      return { data, total };
    }
    return null;
  },

  async getTopPlace(query) {
    const url = `${process.env.API_URL}/api/v2/courses/tops?query=${query || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return { data };
    }
    return null;
  },
};
