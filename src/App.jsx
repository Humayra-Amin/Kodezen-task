import React, { useState } from 'react';
import Kzui from './components/Kzui/Kzui';

const App = () => {
  const options = [
    { value: "1", label: "Frontend Developer", group: "Engineering" },
    { value: "2", label: "Backend Developer", group: "Engineering" },
    { value: "3", label: "UI/UX Designer", group: "Design" },
    { value: "4", label: "Product Manager", group: "Management" },
    { value: "5", label: "Data Scientist", group: "Data Science" },
    { value: "6", label: "Marketing Specialist", group: "Marketing" },
    { value: "7", label: "Sales Representative", group: "Sales" },
    { value: "8", label: "Customer Support Specialist", group: "Support" },
    { value: "9", label: "HR Manager", group: "Human Resources" },
    { value: "10", label: "Financial Analyst", group: "Finance" },
    { value: "11", label: "Operations Coordinator", group: "Operations" },
    { value: "12", label: "Legal Advisor", group: "Legal" }
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
        isGrouped={true}
        isMulti={true}
        onChangeHandler={handleChange}
      />
    </div>
  );
};

export default App;
