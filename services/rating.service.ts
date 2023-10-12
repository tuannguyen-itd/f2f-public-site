import { baseService, IService, makeRequestUrl } from './base.service';
import { IRoom } from '@model/room.model';

interface IRoomService<T> extends IService<IRoom> {
  getTopRooms: (query: any) => Promise<{ data: T[] } | null>;
  getRatingByCourse: (id: string | number) => Promise<T | null>;
}

export const ratingService: {
  getApiUrl(funcName): string;
  countEntities(filters): Promise<any>; apiPath: string; v2Api: string[];
  getEntities(page, size, sort, order, filters): Promise<{ total: number; data: any } | null>;
  getEntityByKey(keyName): Promise<any>;
  getEntity(id: string): Promise<any | null>
  getRatingByCourse(id: string | number): Promise<any | null>;
  getRatingByCourseAVG(id: string | number): Promise<any | null>;
  getRatingByRoomId(id: string | number): Promise<any | null>
} = {
  ...baseService,
  apiPath: 'rating',
  v2Api: ['*'],

  async getEntity(id) {
    const url = `${process.env.API_URL}/api/v2/rooms/rating/${id}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },

  async getRatingByCourse(id) {
    const url = `${process.env.API_URL}/api/v2/courses/rating/${id}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },

  async getRatingByCourseAVG(id) {
    const url = `${process.env.API_URL}/api/v2/rating-course/${id}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },
  async getRatingByRoomId(id) {
    const url = `http://localhost:8080/api/v2/rating-room/${id}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },
};
