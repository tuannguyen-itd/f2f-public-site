import { IPlace } from '@model/place.model';
import { IUserInfo } from '@model/user-info.model';

export interface ILandlord {
  id?: number;
  name?: string;
  logoContentType?: string;
  logo?: any;
  bannerContentType?: string;
  banner?: any;
  note?: any;
  userId?: number;
  userInfo?: IUserInfo;
  places?: IPlace[];
}

export const defaultValue: Readonly<ILandlord> = {};
