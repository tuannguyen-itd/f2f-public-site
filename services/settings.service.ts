import { baseService, IService } from './base.service';
import { ISettings } from '@model/settings.model';

interface ISettingService extends IService<ISettings> {
  getEntityByKey: (keyName?: string) => Promise<ISettings | null>;
}

export const settingsService: ISettingService = {
  ...baseService,
  apiPath: 'settings',
  v2Api: ['*'],
  async getEntityByKey(keyName) {
    const url = `${this.getApiUrl('getEntityByKey')}/${keyName}`;
    const res = await fetch(url);
    return  res.ok ? await res.json() : null;
  },
};
