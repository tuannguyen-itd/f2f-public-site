import { ICourse } from '@model/course.model';

export interface IPriceCourse {
  id?: number;
  basePrice?: number;
  salePrice?: number;
  courses?: ICourse[];
}

export const defaultValue: Readonly<IPriceCourse> = {};
