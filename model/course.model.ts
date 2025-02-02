import { ITutor } from '@model/tutor.model';
import { CourseStatus } from '@model/enumerations/course-status.model';
import { IRatingCourse } from '@model/enumerations/rating-course.model';
import { IRoomTutorBooking } from '@model/room-tutor-booking.model';
import { IBooking } from '@model/booking.model';
import { IPriceCourse } from '@model/price-course.model';
import { ICategory } from '@model/category.model';
import { ILearner } from '@model/learner.model';

export interface ICourse {
  id?: number;
  name?: string;
  description?: any;
  imageContentType?: string;
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
  priceCourseId?: number;
  priceCourse?: IPriceCourse;
  categories?: ICategory[];
  learners?: ILearner[];
}

export const defaultValue: Readonly<ICourse> = {};
