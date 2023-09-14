import { baseService, IService, makeRequestUrl } from './base.service';
import { IRoom } from '@model/room.model';

interface IRoomService<T> extends IService<IRoom> {
  getTopRooms: (query: any) => Promise<{ data: T[] } | null>;
}

export const roomService: IRoomService<IRoom> = {
  ...baseService,
  apiPath: 'rooms',
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
  async getTopRooms(query) {
    const url = `${process.env.API_URL}/api/v2/rooms/tops?query=${query || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return { data };
    }
    return null;
  },
};
