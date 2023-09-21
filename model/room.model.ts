import { ClassRoomStatus } from '@model/enumerations/class-room-status.model';
import { IBooking } from '@model/booking.model';
import { IPhoto } from '@model/photo.model';
import { IPlace } from '@model/place.model';
import { IWard } from '@model/ward.model';
import { ILandlord } from '@model/landlord.model';

export interface IRoom {
  id?: number;
  name?: string;
  description?: any;
  status?: ClassRoomStatus;
  date?: string;
  location?: string;
  bookings?: IBooking[];
  photos?: IPhoto[];
  placeId?: number;
  place?: IPlace;
  ward?: IWard[];
  landlordId?: number;
  landlord?: ILandlord;
}

export const defaultValue: Readonly<IRoom> = {};
