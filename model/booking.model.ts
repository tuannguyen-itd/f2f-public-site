import { IRating } from '@model/rating.model';

export interface IBooking {
  id?: number;
  active?: boolean;
  startDate?: string;
  endDate?: string;
  courseId?: number;
  ratings?: IRating[];
  learnerId?: number;
  tutorId?: number;
  roomId?: number;
}

export const defaultValue: Readonly<IBooking> = {
  active: false,
};
