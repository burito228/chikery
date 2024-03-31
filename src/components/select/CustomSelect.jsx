import Select from 'react-select';
import { useState } from 'react';
import './CustomSelect.css'


const CustomSelect = () => {

  const options = [
    { value: 'lower', label: 'Sorting at lower' },
    { value: 'higher', label: 'Sorting at higher' },
  ];
  
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  }

  return (
    <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Select an option"
        className="shop__select"
    />
  )
}

export default CustomSelect
