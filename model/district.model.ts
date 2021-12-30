import { IWard } from '@model/ward.model';
import { IProvince } from '@model/province.model';

export interface IDistrict {
  id?: number;
  name?: string;
  zip?: string;
  wards?: IWard[];
  provinceId?: number;
  province?: IProvince;
}

export const defaultValue: Readonly<IDistrict> = {};
