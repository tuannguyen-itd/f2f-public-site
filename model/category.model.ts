import {ICourse} from '@model/course.model';

export interface ICategory {
  id?: number;
  name?: string;
  slug?: string;
  parentId?: number;
  courses?: ICourse[];
  children?: ICategory[];
}

export const defaultValue: Readonly<ICategory> = {};
