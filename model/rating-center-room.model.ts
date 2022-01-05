export interface IRatingCenterRoom {
  id?: number;
  comment?: string;
  rate?: number;
  createdAt?: string;
  centerRoomId?: number;
  userInfoId?: number;
}

export const defaultValue: Readonly<IRatingCenterRoom> = {};
