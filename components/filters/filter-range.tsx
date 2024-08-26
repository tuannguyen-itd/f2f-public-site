import React, { useState } from 'react';
import { Range } from 'react-range';
import { formatCurrency } from '../../shared/util/string-utils';

interface IRangeProps {
  onFilterChange: (minPrice: number, maxPrice: number) => void;
}

const FilterRange = (props: IRangeProps) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500000);

  const handleValuesChange = (newValues) => {
    const newMinPrice = Math.min(newValues[0], maxPrice);
    const newMaxPrice = Math.max(newValues[1], minPrice);

    setMinPrice(newMinPrice);
    setMaxPrice(newMaxPrice);
  };

  const handleFilterClick = () => {
    props.onFilterChange(minPrice, maxPrice);
  };

  return (
    <>
      <h5 className="font-weight-bold text-dark mt-4">Lọc theo giá</h5>
      <div className="filter-price mt-2">
        <Range
          step={50000}
          min={0}
          max={5000000}
          values={[minPrice, maxPrice]}
          onChange={handleValuesChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '4px',
                width: '700px',
                backgroundColor: '#ccc',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  height: '100%',
                  left: `${((minPrice - 50000) / (5000000 - 5000)) * 100}%`,
                  width: `${((maxPrice - minPrice) / (5000000 - 5000)) * 100}%`,
                  background: 'rgb(163 217 190)',
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '15px',
                width: '15px',
                borderRadius: '50%',
                backgroundColor: '#43b97e',
                zIndex: 1,
              }}
            />
          )}
        />
        <div className="range">
          <input
            className="filter-range"
            type="text"
            value={formatCurrency(minPrice)}
            onChange={(e) => setMinPrice(parseFloat(e.target.value.replace(/[^0-9]/g, '')) || 0)}
          />
          <input
            className="filter-range"
            type="text"
            value={formatCurrency(maxPrice)}
            onChange={(e) => setMaxPrice(parseFloat(e.target.value.replace(/[^0-9]/g, '')) || 0)}
          />
        </div>
        <button className="btn" style={{ backgroundColor: '#43b97e', color: '#fff' }} onClick={handleFilterClick}>Lọc</button>
      </div>
    </>
  );
};

export default FilterRange;
