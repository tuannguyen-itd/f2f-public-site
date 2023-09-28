import { baseService, IService, makeRequestUrl } from './base.service';
import { IBooking } from '@model/booking.model';

interface IBookingService<T> extends IService<IBooking> {
  getCourserByBooking:  (page, size, sort, order, search, provinceId, districtId, wardId) => Promise<{ data: T[] } | null>;
}

export const bookingService: IBookingService<IBooking> = {
  ...baseService,
  apiPath: 'bookings',
  v2Api: ['*'],

  async getCourserByBooking(page, size, sort, order, search, provinceId, districtId, wardId) {
    const url = `${process.env.API_URL}/api/v2/bookings?page=${page || ''}
    &size=${size || ''}&sort=${sort || ''}&order=${order || ''}&search=${search || ''}&provinceId=${provinceId || ''}&districtId=${districtId || ''}&wardId=${wardId || ''}`;
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  },
};
