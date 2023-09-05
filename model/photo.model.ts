import { IRoom } from '@model/room.model';

export interface IPhoto {
  id?: number;
  title?: string;
  description?: any;
  imageContentType?: string;
  image?: any;
  uploaded?: string;
  rooms?: IRoom[];
}

export const defaultValue: Readonly<IPhoto> = {};
