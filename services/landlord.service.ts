import { baseService, IService, makeRequestUrl } from './base.service';

import { ICenterRoom } from '@model/center-room.model';

interface IRoomService<T> extends IService<ICenterRoom> {
  getTopLandlords: (query: any) => Promise<{ data: T[] } | null>;
}

export const landlordService: IRoomService<ICenterRoom> = {
  ...baseService,
  apiPath: 'landlords',
  v2Api: ['*'],

  async getTopLandlords(query) {
    const url = `${process.env.API_URL}/api/v2/landlords/tops?query=${query || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return { data };
    }
    return null;
  },
  async getEntity(id: number) {
    const url = `${process.env.API_URL}/api/v2/rooms/landlord/${id}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },
};
