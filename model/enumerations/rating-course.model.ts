export interface IRatingCourse {
  id?: number;
  comment?: string;
  rate?: number;
  createdAt?: string;
  userInfoId?: number;
  courseId?: number;
}

export const defaultValue: Readonly<IRatingCourse> = {};
