import { baseService, IService } from './base.service';
import { IMenu } from '@model/menu.model';
import { settingsService } from '@services/settings.service';

export interface IMenus {
  header: IMenu[];
  footers: {
    menuItems: IMenu[],
    title: string,
  }[];
}

interface IMenuService extends IService<IMenu> {
  getMenus: () => Promise<IMenus>;
}

export const menuService: IMenuService = {
  ...baseService,
  apiPath: 'menus',
  v2Api: [],

  async getMenus() {
    const getMenu = (location) => {
      return menuService.getEntities(
        0, 200, 'order', 'asc', { 'location.equals': location },
      ).then(({ data }) => data);
    };
    const getMenuTitle = (location) => {
      return settingsService.getEntityByKey(location).then(({ value }) => value);
    };

    const footers = await Promise.all(['FOOTER1', 'FOOTER2', 'FOOTER3'].map(async (location) => {
      return {
        menuItems: await getMenu(location),
        title: await getMenuTitle(location),
      };
    }));

    return {
      footers,
      header: await getMenu('HEADER'),
    };
  },
};
