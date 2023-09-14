import { IRoom } from '@model/room.model';
import { IWard } from '@model/ward.model';

export interface IPlace {
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
  rooms?: IRoom[];
  wardId?: number;
  landlordId?: number;
  ward?: IWard;
}

export const defaultValue: Readonly<IPlace> = {};
