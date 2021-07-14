import { FilterInputType } from './enumerations/filter-models';
import { IObject } from './object';

interface IFilterBase {
  type: FilterInputType;
}

interface IFilterInput extends IFilterBase {
  name?: string;
  label?: string;
  className?: string;
  validate?: any;
}

interface IFilterSelect extends IFilterInput {
  selectOptions?: {
    value: string;
    label: string;
  }[];
}

interface IFilterCustom {
  type: FilterInputType;
  className?: string;
  validate?: any;
  selectOptions?: {
    value: string;
    label: string;
  }[];
  customComponent?: any;
}

export interface IFilter extends IFilterInput, IFilterSelect, IFilterCustom {}

export type IFilterValues = IObject<string | number | boolean>;
