import { TutorType } from '@model/enumerations/tutor-type.model';
import { DegreeType } from '@model/enumerations/degree-type.model';
import { IUserInfo } from '@model/user-info.model';

export interface ITutor {
  id?: number;
  type?: TutorType;
  degree?: DegreeType;
  userInfoId?: number;
  userInfo?: IUserInfo;
}

export const defaultValue: Readonly<ITutor> = {};
