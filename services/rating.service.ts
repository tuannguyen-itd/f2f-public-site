import { baseService, IService, makeRequestUrl } from './base.service';

import { ICenterRoom } from '@model/center-room.model';

interface IRoomService<T> extends IService<ICenterRoom> {
  getTopRooms: (query: any) => Promise<{ data: T[] } | null>;
}

export const ratingService: { getApiUrl(funcName): string; countEntities(filters): Promise<any>; apiPath: string; v2Api: string[]; getEntities(page, size, sort, order, filters): Promise<{ total: number; data: any } | null>; getEntityByKey(keyName): Promise<any>; getEntity(id: string): Promise<any | null> } = {
  ...baseService,
  apiPath: 'rating',
  v2Api: ['*'],

  async getEntity(id: number) {
    const url = `${process.env.API_URL}/api/v2/rooms/rating/${id}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },
};
