// import { IWard } from "app/shared/model/ward.model";

import { IRoom } from '@model/room.model';

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
  // ward?: IWard;
  landlordId?: number;
}

export const defaultValue: Readonly<IPlace> = {};
