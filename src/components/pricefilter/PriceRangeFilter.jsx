import { useState } from 'react';
import { Range } from 'react-range';

const PriceRangeFilter = ({ onChange }) => {
  const [priceRange, setPriceRange] = useState([0, 100]); // Початковий діапазон цін

  const handlePriceChange = (value) => {
    setPriceRange(value);
    onChange(value); // Передайте вибраний діапазон назад до батьківського компонента
  };

  return (
    <div>
      <Range
        step={1}
        min={0}
        max={100} // Максимальне значення ціни
        values={priceRange}
        onChange={handlePriceChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc',
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '16px',
              width: '16px',
              backgroundColor: '#ce873a',
              borderRadius: '50%',
              outline: 'none',
            }}
          />
        )}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px' }}>
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
