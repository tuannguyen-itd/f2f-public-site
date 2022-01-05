import React from 'react';
import { IWard } from '@model/ward.model';

interface IAddress {
  ward: IWard;
}

export const Address = ({ ward }: IAddress) => {
  // prettier-ignore
  return <>
    {ward ? (ward.name + (
      ward.district ? (' - ' + ward.district.name + (
        ward.district.province ? ' - ' + ward.district.province.name : ''
      )) : ''
    )) : ''}
  </>;
};
