import { IRoom } from '@model/room.model';
import { IWard } from '@model/ward.model';
import { ILandlord } from '@model/landlord.model';

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
  landlord?: ILandlord;
  ward?: IWard;
}

export const defaultValue: Readonly<IPlace> = {};
