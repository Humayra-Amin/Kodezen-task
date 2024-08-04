import React, { useState } from 'react';
import Kzui from './components/Kzui/Kzui';

const App = () => {
  const options = [
    { value: '1', label: 'Option 1', group: 'Group 1' },
    { value: '2', label: 'Option 2', group: 'Group 1' },
    { value: '3', label: 'Option 3', group: 'Group 2' },
    { value: '4', label: 'Option 4', group: 'Group 2' },
    { value: '5', label: 'Option 5', group: 'Group 3' }
  ];

  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (selectedValue) => {
    console.log('Selected value:', selectedValue);
    setSelectedValue(selectedValue);
  };

  return (
    <div>
      <Kzui
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        options={options}
        value={selectedValue}
        placeholder="Select an option"
        // isGrouped={true}
        // isMulti={true}
        // onChangeHandler={handleChange}
      />
    </div>
  );
};

export default App;
