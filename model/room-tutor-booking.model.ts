import { ITutor } from '@model/tutor.model';
import { ICenterRoom } from '@model/center-room.model';

export interface IRoomTutorBooking {
  id?: number;
  active?: boolean;
  startDate?: string;
  endDate?: string;
  centerRoomId?: number;
  tutorId?: number;
  tutor?: ITutor;
  centerRoom?: ICenterRoom;
}

export const defaultValue: Readonly<IRoomTutorBooking> = {
  active: false,
};
