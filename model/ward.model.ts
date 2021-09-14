import { IDistrict } from '@model/district.model';

export interface IWard {
  id?: number;
  name?: string;
  zip?: string;
  districtId?: number;
  district?: IDistrict;
}

export const defaultValue: Readonly<IWard> = {};
