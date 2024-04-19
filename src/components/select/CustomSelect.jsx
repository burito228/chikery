import Select from 'react-select';
import './CustomSelect.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDisplayOrder } from '../../redux/slices/filterSlice';


const CustomSelect = () => {

  const [selectedOption, setSelectedOption] = useState(null)

  const dispatch = useDispatch()

  const options = [
    { value: 'lower', label: 'Sorting at lower' },
    { value: 'higher', label: 'Sorting at higher' },
  ];
  

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
    dispatch(setDisplayOrder(selectedOption));
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
