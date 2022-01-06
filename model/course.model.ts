import { ITutor } from '@model/tutor.model';
import { CourseStatus } from '@model/enumerations/course-status.model';
import { IRatingCourse } from '@model/enumerations/rating-course.model';
import { IRoomTutorBooking } from '@model/room-tutor-booking.model';

export interface ICourse {
  id?: number;
  name?: string;
  description?: any;
  photoContentType?: string;
  photo?: any;
  status?: CourseStatus;
  amount?: number;
  date?: string;
  roomTutorBookingId?: number;
  ratingCourses?: IRatingCourse[];
  tutorId?: number;
  tutor?: ITutor;
  roomTutorBooking?: IRoomTutorBooking;
  averageRate?: number;
  totalRate?: number;
}

export const defaultValue: Readonly<ICourse> = {};
