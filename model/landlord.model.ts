import { IPlace } from '@model/place.model';

export interface ILandlord {
  id?: number;
  name?: string;
  logoContentType?: string;
  logo?: any;
  bannerContentType?: string;
  banner?: any;
  note?: any;
  userId?: number;
  places?: IPlace[];
}

export const defaultValue: Readonly<ILandlord> = {};
