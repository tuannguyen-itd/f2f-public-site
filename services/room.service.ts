import { baseService, IService } from './base.service';
import { IRoom } from '@model/room.model';

interface IRoomService<T> extends IService<IRoom> {
  getAllRooms: (page, size, sort, order, search, provinceId, districtId, wardId, minPrice, maxPrice, lat, lng, areaRange) => Promise<{ data: T[] } | null>;
  getTopRoom : () => Promise<{ data: T[] } | null>;
  getTopRoomseller : () => Promise<{ data: T[] } | null>;
}

export const roomService: IRoomService<IRoom> = {
  ...baseService,
  apiPath: 'rooms',
  v2Api: ['*'],

  async getAllRooms(page, size, sort, order, search, provinceId, districtId, wardId, minPrice, maxPrice, lat, lng, areaRange) {
    const encodedSearch = encodeURIComponent(search || '');
    const url = `${process.env.API_URL}/api/v2/rooms?page=${page || ''}&size=${size || ''}
    &sort=${sort || ''},&order=${order || ''}&search=${encodedSearch || ''}&provinceId=${provinceId || ''}
    &districtId=${districtId || ''}&wardId=${wardId || ''}&minPrice=${minPrice || ''}&maxPrice=${maxPrice || ''}
    &lat=${lat || ''}&lng=${lng || ''}&areaRange=${areaRange || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },

  async getTopRoom() {
    const url = `${process.env.API_URL}/api/v2/room-topseller`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return { data };
    }
    return null;
  },

  async getTopRoomseller() {
    const url = `${process.env.API_URL}/api/v2/room-topseller`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return { data };
    }
    return null;
  },
};
