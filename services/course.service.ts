import { baseService, IService, makeRequestUrl } from './base.service';
import { ICourse } from '@model/course.model';

interface ICourseService<T> extends IService<ICourse> {
  getSuggestCourses: (id) => Promise<{ data: T[] } | null>;
  getAllCourse:  (page, size, sort, order, search, provinceId, districtId, wardId, minPrice, maxPrice) => Promise<{ data: T[] } | null>;
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

  async getAllCourse(page, size, sort, order, search, provinceId, districtId, wardId, minPrice, maxPrice) {
    const encodedSearch = encodeURIComponent(search || '');
    const url = `${process.env.API_URL}/api/v2/courses?page=${page || ''}&size=${size || ''}
    &sort=${sort || 'id'},&order=${order || 'DESC'}&search=${encodedSearch || ''}&provinceId=${provinceId || ''}
    &districtId=${districtId || ''}&wardId=${wardId || ''}&minPrice=${minPrice || ''}&maxPrice=${maxPrice || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },

  async getSuggestCourses(id: number) {
    const url = `${process.env.API_URL}/api/v2/suggest-courses?courseId=${id}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return { data };
    }
    return null;
  },
};
