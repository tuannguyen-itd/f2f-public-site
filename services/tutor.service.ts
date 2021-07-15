import { baseService, IService, makeRequestUrl } from './base.service';
import { ITutor } from '@model/tutor.model';

interface ITutorService<T> extends IService<ITutor> {
  getTopTutors: (query: any) => Promise<{ data: T[] } | null>;
}

export const tutorService: ITutorService<ITutor> = {
  ...baseService,
  apiPath: 'tutors',
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

  async getTopTutors(query) {
    const url = `${process.env.API_URL}/api/v2/tutors/tops?query=${query || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return { data };
    }
    return null;
  },
};
