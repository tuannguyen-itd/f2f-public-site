import { baseService, IService, makeRequestUrl } from './base.service';
import { ICategory } from '@model/category.model';

interface ICategoryService<T> extends IService<ICategory> {
  getCourseByCategory: (slug: string) => Promise<T | null>;
}

export const CategoryService: ICategoryService<ICategory> = {
  ...baseService,
  apiPath: 'categories',
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

  async getCourseByCategory(slug) {
    const url = `${process.env.API_URL}/api/v2/category-courses/${slug}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },
};
