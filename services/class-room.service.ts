import { baseService, IService, makeRequestUrl } from './base.service';
import { IClassRoom } from '@model/class-room.model';

interface IClassRoomService<T> extends IService<IClassRoom> {
  getTopClassRooms: (query: any) => Promise<{ data: T[] } | null>;
}

export const classRoomService: IClassRoomService<IClassRoom> = {
  ...baseService,
  apiPath: 'class-rooms',
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

  async getTopClassRooms(query) {
    const url = `${process.env.API_URL}/api/v2/class-rooms/tops?query=${query || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return { data };
    }
    return null;
  },
};
