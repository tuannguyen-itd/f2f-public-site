import { ITutor } from '@model/tutor.model';
import { CourseStatus } from '@model/enumerations/course-status.model';
import { IRatingCourse } from '@model/enumerations/rating-course.model';
import { IRoomTutorBooking } from '@model/room-tutor-booking.model';
import { IBooking } from '@model/booking.model';

export interface ICourse {
  id?: number;
  name?: string;
  description?: any;
  image_content_type?: string;
  image?: any;
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
  bookingId?: number;
  booking?: IBooking[];
}

export const defaultValue: Readonly<ICourse> = {};
