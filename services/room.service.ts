import { baseService, IService, makeRequestUrl } from './base.service';
import { IRoom } from '@model/room.model';

interface IRoomService<T> extends IService<IRoom> {
  getAllRooms:  (page, size, sort, order, search, provinceId, districtId, wardId) => Promise<{ data: T[] } | null>;
}

export const roomService: IRoomService<IRoom> = {
  ...baseService,
  apiPath: 'rooms',
  v2Api: ['*'],

  async getAllRooms(page, size, sort, order, search, provinceId, districtId, wardId) {
    const url = `${process.env.API_URL}/api/v2/rooms?page=${page || ''}
    &size=${size || ''}&sort=${sort || ''}&order=${order || ''}&search=${search || ''}&provinceId=${provinceId || ''}&districtId=${districtId || ''}&wardId=${wardId || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },
};
