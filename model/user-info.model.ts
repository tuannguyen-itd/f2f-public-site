import { Moment } from 'moment';
import { IUser, defaultValue as userDefaultValue } from '@model/user.model';
import { IWard } from '@model/ward.model';
import { Gender } from '@model/enumerations/gender.model';

export interface IUserInfo {
  id?: number;
  phone?: string;
  avatarContentType?: string;
  avatar?: any;
  dob?: Moment;
  address?: string;
  gender?: Gender;
  note?: any;
  registerAt?: string;
  userId?: number;
  wardId?: number;
  learnerId?: number;
  tutorId?: number;
  user?: IUser;
  ward?: IWard;
}

export const defaultValue: Readonly<IUserInfo> = {
  id: null,
  phone: '',
  avatarContentType: '',
  avatar: '',
  dob: null,
  address: '',
  gender: null,
  note: '',
  registerAt: '',
  userId: null,
  wardId: null,
  learnerId: null,
  tutorId: null,
  user: userDefaultValue,
  ward: null,
};
