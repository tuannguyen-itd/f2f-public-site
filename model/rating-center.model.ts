export interface IRatingCenter {
  id?: number;
  comment?: string;
  rate?: number;
  createdAt?: string;
  centerId?: number;
  centerRoomId?: number;
  userInfoId?: number;
}

export const defaultValue: Readonly<IRatingCenter> = {};
