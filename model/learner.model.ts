import { IUserInfo } from '@model/user-info.model';
import { ICourse } from '@model/course.model';
import { IBooking } from '@model/booking.model';

export interface ILearner {
  id?: number;
  title?: string;
  userInfoId?: number;
  bookings?: IBooking[];
  courses?: ICourse[];
  userInfo?: IUserInfo;
}

export const defaultValue: Readonly<ILearner> = {};
