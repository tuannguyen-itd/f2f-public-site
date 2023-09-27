import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import AddressSelectorColumn from '@components/address-selector/address-selector-column';
import { provinceService } from '@services/province.service';
import { districtService } from '@services/district.service';
import { wardService } from '@services/ward.service';
import { IProvince } from '@model/province.model';
import { IDistrict } from '@model/district.model';
import { IWard } from '@model/ward.model';
export interface IAddressState {
  wardId?: number;
  districtId?: number;
  provinceId?: number;
}

interface IAddressSelectorProps {
  onSelect?: (address: IAddressState) => any;
  values?: IAddressState;
  level?: number | string;
  className?: string;
  col?: string | number;
  isFilter?: boolean;
}

const AddressSelector = (props: IAddressSelectorProps) => {
  const { onSelect, values, level = 3, className = 'form-control form-control-sm', col = 6, isFilter } = props;
  const [provinces, setProvinces] = useState<IProvince[]>([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [addressState, setAddressState]: [IAddressState, Dispatch<SetStateAction<IAddressState>>] = useState({
    provinceId: null,
    districtId: null,
    wardId: null,
  });

  const SERVER_MAX_SIZE = 2147483647;

  const getProvinces = () => {
    provinceService.getEntities(0, SERVER_MAX_SIZE).then((data: IProvince[] | any) => setProvinces(data.data));
  };

  const getDistricts = (provinceId: number) => {
    if (provinceId !== 0) {
      districtService.getEntities(0, SERVER_MAX_SIZE , null, null, { 'provinceId.equals': provinceId }).then((data: IDistrict[] | any) => setDistricts(data.data));
    } else {
      setDistricts([]);
    }
    setWards([]);
  };

  const getWards = (districtId: number) => {
    if (districtId !== 0) {
      wardService.getEntities(0, SERVER_MAX_SIZE, null, null, { 'districtId.equals': districtId }).then((data: IWard[] | any) => setWards(data.data));
    } else {
      setWards([]);
    }
    setWards([]);
  };

  const setAddress = (address: IAddressState) => {
    if (
      !(
        addressState.provinceId === address.provinceId &&
        addressState.districtId === address.districtId &&
        addressState.wardId === address.wardId
      )
      ) {
      if (isFilter) {
        setAddressState({
          ...addressState,
          ...address,
        });
      } else {
        setAddressState({
          ...addressState,
          provinceId: address.provinceId || null,
          districtId: address.districtId || null,
          wardId: address.wardId || null,
        });
      }
    }
  };

  useEffect(() => getProvinces(), []);

  useEffect(() => {
    onSelect?.(addressState);
  }, [addressState]);

  useEffect(() => {
    (async () => {
      if (values.wardId && (!values.districtId || !values.provinceId)) {
        const ward = await wardService.getEntity(props.values.wardId);
        onSelect({
          ...values,
          provinceId: ward.district.provinceId,
          districtId: ward.districtId,
        });
      } else {
        setAddress(values);
      }

      values.provinceId && getDistricts(values.provinceId);
      values.districtId && getWards(values.districtId);
    })();
  }, [values]);

  const onChange = ({ target: { name, value } }) => {
    const newValue = +value || null;
    const newAddressState = { ...addressState };

    switch (name) {
      case 'province':
        newAddressState.provinceId = newValue;
        newAddressState.districtId = null;
        newAddressState.wardId = null;
        if (newValue) getDistricts(newValue);
        else setDistricts([]);
        break;

      case 'district':
        newAddressState.districtId = newValue;
        newAddressState.wardId = null;
        if (newValue) getWards(newValue);
        else setWards([]);
        break;

      case 'ward':
        newAddressState.wardId = newValue;
        break;

      default:
    }

    setAddress(newAddressState);
  };

  return (
    <>
      {level >= 1 ? (
        <AddressSelectorColumn
          name="province"
          value={addressState.provinceId}
          entities={provinces}
          onChange={onChange}
          className={className}
          col={col}
        />
      ) : null}

      {level >= 2 ? (
        <AddressSelectorColumn
          name="district"
          value={addressState.districtId}
          entities={districts}
          onChange={onChange}
          className={className}
          col={col}
        />
      ) : null}

      {level >= 3 ? (
        <AddressSelectorColumn
          name="ward"
          value={addressState.wardId}
          entities={wards}
          onChange={onChange}
          className={className}
          col={col}
        />
      ) : null}
    </>
  );
};

export default AddressSelector;
