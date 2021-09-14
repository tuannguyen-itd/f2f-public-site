import { IDistrict } from '@model/district.model';

export interface IProvince {
  id?: number;
  name?: string;
  zip?: string;
  districts?: IDistrict[];
}

export const defaultValue: Readonly<IProvince> = {};
