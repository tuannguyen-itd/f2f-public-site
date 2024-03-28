import { IRoom } from '@model/room.model';

export interface IPriceRoom {
  id?: number;
  basePrice?: number;
  salePrice?: number;
  option?: any;
  rooms?: IRoom[];
}

export const defaultValue: Readonly<IPriceRoom> = {};
