import { baseService, IService, makeRequestUrl } from './base.service';
import { IUserInfo } from '@model/user-info.model';

interface IUserInfoService<T> extends IService<IUserInfo> {
}

export const userService: IUserInfoService<IUserInfo> = {
  ...baseService,
  apiPath: 'user-infos',
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

};
