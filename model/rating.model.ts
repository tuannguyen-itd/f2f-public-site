import { RatingStatus } from '@model/enumerations/rating-status.model';

export interface IRating {
  id?: number;
  comment?: string;
  rate?: number;
  type?: RatingStatus;
  createdAt?: string;
  userInfoId?: number;
  bookingId?: number;
}

export const defaultValue: Readonly<IRating> = {};
