import { IWard } from '@model/ward.model';

export interface ICenter {
  id?: number;
  name?: string;
  logoContentType?: string;
  logo?: any;
  bannerContentType?: string;
  banner?: any;
  address?: string;
  lat?: number;
  lng?: number;
  note?: any;
  wardId?: number;
  ward?: IWard;
}

export const defaultValue: Readonly<ICenter> = {};
