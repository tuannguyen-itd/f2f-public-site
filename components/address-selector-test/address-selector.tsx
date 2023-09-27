import React, { useEffect, useState } from 'react';
import { IDistrict } from '@model/district.model';
import { IProvince } from '@model/province.model';
import { IWard } from '@model/ward.model';

interface IAddressSelectorProps {
  onProvinceSelect?: (selectedProvince: string) => void;
  onDistrictSelect?: (selectedDistrict: string) => void;
  onWardSelect?: (onWardSelect: string) => void;
  province?: IProvince;
  isFilter?: boolean;
  district?: IDistrict;
  ward?: IWard;
}

export const AddressSelector = (props: IAddressSelectorProps) => {
  const { onProvinceSelect, onDistrictSelect, onWardSelect, province, district, ward } = props;
  const [selectedProvince, setSelectedProvince] = useState<IProvince>();
  const [selectedDistrict, setSelectedDistrict] = useState<IDistrict>();
  const [selectedWard, setSelectedWard] = useState<IWard | null>(null);

  const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (Array.isArray(province)) {
      const selectedOption = province.find(item => item.name === selectedValue);
      setSelectedProvince(selectedOption);
      setSelectedDistrict(null);
      setSelectedWard(null);
      if (onProvinceSelect) {
        onProvinceSelect(selectedOption);
      }
    }
  };

  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (Array.isArray(district)) {
      const selectedOption = district.find(item => item.name === selectedValue);
      setSelectedDistrict(selectedOption);
      setSelectedWard(null);
      if (onDistrictSelect) {
        onDistrictSelect(selectedOption);
      }
    }
  };

  const handleWardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (Array.isArray(ward)) {
      const selectedOption = ward.find(item => item.name === selectedValue);
      setSelectedWard(selectedOption);
      if (onWardSelect) {
        onWardSelect(selectedOption);
      }
    }
  };
  return (
    <div className="d-flex row" style={{ marginLeft: '-15px' }}>
      <select className="col-md-4 pr-3" name="province" id="province" value={selectedProvince ? selectedProvince.name : ''} onChange={handleProvinceChange}>
        <option value="">Tỉnh, Thành Phố</option>
        {Array.isArray(province) ?
          province.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))
          : null}
      </select>
      <select className="col-md-4 pr-3" name="district" id="district"  value={selectedDistrict ? selectedDistrict.name : ''} onChange={handleDistrictChange}>
        <option>Quận, Huyện</option>
        {Array.isArray(district) ?
          district.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))
          : null}
      </select>
      <select className="col-md-4 pr-3" name="ward" id="ward"  value={selectedWard ? selectedWard.name : ''} onChange={handleWardChange}>
        <option>Phường, Xã</option>
        {Array.isArray(ward)  ?
          ward.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))
          : null}
      </select>
    </div>
  );
};
