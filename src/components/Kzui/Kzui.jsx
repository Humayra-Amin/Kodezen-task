import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Kzui = ({
  isClearable = false,
  isSearchable = false,
  isDisabled = false,
//   options = [],
//   value = null,
//   placeholder = 'Select...',
//   isGrouped = false,
//   isMulti = false,
//   onChangeHandler,
//   onMenuOpen = null,
//   onSearchHandler = null
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedValues, setSelectedValues] = useState(value || (isMulti ? [] : null));
  const [disabledOptions, setDisabledOptions] = useState([]);

  useEffect(() => {
    setSelectedValues(value || (isMulti ? [] : null));
  }, [value, isMulti]);

  useEffect(() => {
    if (isMulti) {
      setDisabledOptions(selectedValues.map((val) => val.value));
    } else if (selectedValues) {
      setDisabledOptions([selectedValues.value]);
    } else {
      setDisabledOptions([]);
    }
  }, [selectedValues, isMulti]);

  const handleOptionClick = (option) => {
    if (isDisabled || disabledOptions.includes(option.value)) return;

    if (isMulti) {
      const newValues = selectedValues.includes(option)
        ? selectedValues.filter((val) => val.value !== option.value)
        : [...selectedValues, option];
      setSelectedValues(newValues);
      onChangeHandler(newValues);
    } else {
      if (selectedValues?.value !== option.value) {
        setSelectedValues(option);
        onChangeHandler(option);
        setIsOpen(false);
      }
    }
  };

//   const handleClear = (e, optionToClear) => {
//     e.stopPropagation();
//     if (isMulti) {
//       const newValues = selectedValues.filter((val) => val.value !== optionToClear.value);
//       setSelectedValues(newValues);
//       onChangeHandler(newValues);
//       setDisabledOptions(newValues.map((val) => val.value));
//     } else {
//       setSelectedValues(null);
//       onChangeHandler(null);
//       setDisabledOptions([]);
//       setIsOpen(true);
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchText(e.target.value);
//     if (onSearchHandler) {
//       onSearchHandler(e.target.value);
//     }
//   };

//   const handleMenuOpen = () => {
//     if (isDisabled) return;
//     setIsOpen(!isOpen);
//     if (onMenuOpen) {
//       onMenuOpen();
//     }
//   };

//   const renderOptions = () => {
//     let filteredOptions = options;
//     if (isSearchable && searchText) {
//       filteredOptions = options.filter((option) =>
//         option.label.toLowerCase().includes(searchText.toLowerCase())
//       );
//     }

    return filteredOptions.map((option) => (
      <div
        key={option.value}
        className={`kzui-select__option ${
          disabledOptions.includes(option.value) ? 'kzui-select__option--disabled' : ''
        } ${isMulti
          ? selectedValues.some((val) => val.value === option.value)
            ? 'kzui-select__option--selected'
            : ''
          : selectedValues?.value === option.value
          ? 'kzui-select__option--selected'
          : ''
        }`}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    ));
  };

//   const renderGroupedOptions = () => {
//     const groupedOptions = options.reduce((groups, option) => {
//       const group = groups[option.group] || [];
//       group.push(option);
//       groups[option.group] = group;
//       return groups;
//     }, {});

//     return Object.keys(groupedOptions).map((group) => (
//       <div key={group} className="kzui-select__group">
//         <div className="kzui-select__group-label">{group}</div>
//         {groupedOptions[group].map((option) => (
//           <div
//             key={option.value}
//             className={`kzui-select__option ${
//               disabledOptions.includes(option.value) ? 'kzui-select__option--disabled' : ''
//             } ${isMulti
//               ? selectedValues.some((val) => val.value === option.value)
//                 ? 'kzui-select__option--selected'
//                 : ''
//               : selectedValues?.value === option.value
//               ? 'kzui-select__option--selected'
//               : ''
//             }`}
//             onClick={() => handleOptionClick(option)}
//           >
//             {option.label}
//           </div>
//         ))}
//       </div>
//     ));
//   };

//   return (
//     <div className={`kzui-select ${isDisabled ? 'kzui-select--disabled' : ''}`} onClick={handleMenuOpen}>
//       <div className="kzui-select__control">
//         {isMulti ? (
//           selectedValues.length > 0 ? (
//             selectedValues.map((val) => (
//               <span key={val.value} className="kzui-select__multi-value">
//                 {val.label}
//                 {isClearable && (
//                   <button
//                     className="kzui-select__clear"
//                     onClick={(e) => handleClear(e, val)}
//                   >
//                     &times;
//                   </button>
//                 )}
//               </span>
//             ))
//           ) : (
//             <span className="kzui-select__placeholder">{placeholder}</span>
//           )
//         ) : (
//           <span className="kzui-select__single-value">
//             {selectedValues ? selectedValues.label : <span className="kzui-select__placeholder">{placeholder}</span>}
//             {isClearable && selectedValues && (
//               <button className="kzui-select__clear" onClick={(e) => handleClear(e, selectedValues)}>
//                 &times;
//               </button>
//             )}
//           </span>
//         )}
//       </div>
//       {isOpen && (
//         <>
//           {isSearchable && (isMulti ? selectedValues.length > 0 : !selectedValues) && (
//             <input
//               className="kzui-select__search"
//               type="text"
//               value={searchText}
//               onChange={handleSearchChange}
//               placeholder="Search..."
//               onClick={(e) => e.stopPropagation()}
//             />
//           )}
//           <div className="kzui-select__menu">
//             {isGrouped ? renderGroupedOptions() : renderOptions()}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

Kzui.propTypes = {
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
//   options: PropTypes.array.isRequired,
//   value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
//   placeholder: PropTypes.string,
//   isGrouped: PropTypes.bool,
//   isMulti: PropTypes.bool,
//   onChangeHandler: PropTypes.func.isRequired,
//   onMenuOpen: PropTypes.func,
//   onSearchHandler: PropTypes.func,
};

export default Kzui;
