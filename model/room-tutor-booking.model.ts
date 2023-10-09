import { ITutor } from '@model/tutor.model';

export interface IRoomTutorBooking {
  id?: number;
  active?: boolean;
  startDate?: string;
  endDate?: string;
  centerRoomId?: number;
  tutorId?: number;
  tutor?: ITutor;
}

export const defaultValue: Readonly<IRoomTutorBooking> = {
  active: false,
};
