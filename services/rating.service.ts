import { baseService, IService, makeRequestUrl } from './base.service';
import { IRatingCenterRoom } from '@model/rating-center-room.model';

interface IPlaceService<T> extends IService<IRatingCenterRoom> {
  getTopRating: (query: any) => Promise<{ data: T[] } | null>;
  getRatingByRoom: (id: number) => Promise<{ data: T[] } | null>;
}

export const ratingService: IPlaceService<IRatingCenterRoom> = {
  ...baseService,
  apiPath: 'rating',
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

  async getRatingByRoom(id) {
    const url = `${process.env.API_URL}/api/v2//rooms/rating/${id}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },

  async getTopRating(query) {
    const url = `${process.env.API_URL}/api/v2/rating/tops?query=${query || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return { data };
    }
    return null;
  },
};
