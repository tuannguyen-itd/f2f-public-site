import { ClassRoomStatus } from '@model/enumerations/class-room-status.model';
import { ICenter } from '@model/center.model';

export interface IClassRoom {
  id?: number;
  name?: string;
  description?: any;
  photoContentType?: string;
  photo?: any;
  amount?: number;
  status?: ClassRoomStatus;
  date?: string;
  location?: string;
  centerId?: number;
  center?: ICenter;
}

export const defaultValue: Readonly<IClassRoom> = {};
