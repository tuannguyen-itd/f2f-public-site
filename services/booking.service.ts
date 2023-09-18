import { baseService, IService, makeRequestUrl } from './base.service';
import { IBooking } from '@model/booking.model';

interface IBookingService<T> extends IService<IBooking> {
}

export const bookingService: IBookingService<IBooking> = {
  ...baseService,
  apiPath: 'booking',
  v2Api: ['*'],

  async getEntities(page, size, sort, order, filters) {
    const baseUrl = this.getApiUrl('getEntities');
    const url = makeRequestUrl(baseUrl, page, size, sort, order, filters);
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res.json();
      const total = +res.headers.get('x-total-count');
      return { data, total };
    }
    return null;
  },

};
