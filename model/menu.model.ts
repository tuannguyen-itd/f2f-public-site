export interface IMenu {
  id?: number;
  label?: string;
  url?: string;
  location?: string;
  order?: number;
}

export const defaultValue: Readonly<IMenu> = {};
