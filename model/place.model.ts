import { ICenterRoom } from '@model/center-room.model';
// import { IWard } from "app/shared/model/ward.model";

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
  rooms?: ICenterRoom[];
  // ward?: IWard;
  landlordId?: number;
}

export const defaultValue: Readonly<IPlace> = {};
