import { baseService, IService, makeRequestUrl } from './base.service';
import { ICourse } from '@model/course.model';

interface ICourseService<T> extends IService<ICourse> {
  getTopCourses: (query: any) => Promise<{ data: T[] } | null>;
}

export const courseService: ICourseService<ICourse> = {
  ...baseService,
  apiPath: 'courses',
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

  async getTopCourses(query) {
    const url = `${process.env.API_URL}/api/v2/courses/tops?query=${query || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return { data };
    }
    return null;
  },
};
