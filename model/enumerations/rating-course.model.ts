import { IUserInfo } from '@model/user-info.model';

export interface IRatingCourse {
  id?: number;
  comment?: string;
  rate?: number;
  createdAt?: string;
  userInfoId?: number;
  userInfo?: IUserInfo;
  courseId?: number;
}

export const defaultValue: Readonly<IRatingCourse> = {};
