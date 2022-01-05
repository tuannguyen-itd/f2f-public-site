import { CenterRoomStatus } from '@model/enumerations/center-room-status.model';
import { ICenter } from '@model/center.model';
import { ITutor } from '@model/tutor.model';
import { IRatingCenterRoom } from '@model/rating-center-room.model';
import { IRatingTutor } from '@model/rating-tutor.model';
import { IRatingCenter } from '@model/rating-center.model';
import { IRoomTutorBooking } from '@model/room-tutor-booking.model';

export interface ICenterRoom {
  id?: number;
  name?: string;
  description?: any;
  photoContentType?: string;
  photo?: any;
  status?: CenterRoomStatus;
  date?: string;
  location?: string;
  ratingCenterRooms?: IRatingCenterRoom[];
  ratingTutors?: IRatingTutor[];
  ratingCenters?: IRatingCenter[];
  roomTutorBookings?: IRoomTutorBooking[];
  albumCenterRoomId?: number;
  courseId?: number;
  centerId?: number;
  tutorId?: number;
  center?: ICenter;
  tutor?: ITutor;
}

export const defaultValue: Readonly<ICenterRoom> = {};
