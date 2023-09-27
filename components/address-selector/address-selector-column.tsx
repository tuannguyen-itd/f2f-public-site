import React from 'react';
import FilterColumn from '@components/filters/filter-column';

export interface IAddressSelectorColumnProps {
  name: string;
  value: string | number;
  disabled?: boolean;
  entities: { id?: number; name?: string }[];
  onChange: (address) => void | any;
  className?: string;
  col?: string | number;
}

const AddressSelectorColumn = ({
     name,
     value,
     disabled,
     entities,
     onChange,
     className = 'form-control',
     col = 3,
   }: IAddressSelectorColumnProps) => (
  <FilterColumn label={`${name.charAt(0).toUpperCase() + name.slice(1)}`} col={col}>
    <select name={name} value={value === null ? '' : value} onChange={onChange} disabled={disabled} className={className}>
      <option value={null} />
      {Array.isArray(entities) && entities.length > 0 ? (
        entities.map(entity => (
          <option value={entity.id} key={entity.id}>
            {entity.name}
          </option>
        ))
      ) : null}
    </select>
  </FilterColumn>
);

export default AddressSelectorColumn;
