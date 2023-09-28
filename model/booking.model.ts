import { IRating } from '@model/rating.model';
import { ICourse } from '@model/course.model';

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
  course?: ICourse[];
}

export const defaultValue: Readonly<IBooking> = {
  active: false,
};
