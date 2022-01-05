export interface IRatingTutor {
  id?: number;
  comment?: string;
  rate?: number;
  createdAt?: string;
  tutorId?: number;
  centerRoomId?: number;
  userInfoId?: number;
}

export const defaultValue: Readonly<IRatingTutor> = {};
