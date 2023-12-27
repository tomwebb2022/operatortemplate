import React, { useState } from "react";

function Input({ onInputChange1, onInputChange2, onInputChange3 }) {
  const handleInputChange1 = (event) => {
    onInputChange1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    onInputChange2(event.target.value);
  };

  const handleInputChange3 = (event) => {
    onInputChange3(event.target.value);
  };
  return (
    <div className="Input">
      <input
        type="number"
        placeholder="Enter the number of kg or lbs only"
        onChange={handleInputChange1}
      />
      <input
        type="number"
        placeholder="Enter the number of kg or lbs only"
        onChange={handleInputChange2}
      />
      <input
        type="number"
        placeholder="Enter the number of kg or lbs only"
        onChange={handleInputChange3}
      />
    </div>
  );
}

export default Input;

// const SimpleInput = () => {
//   // State variable to hold the input value
//   const [inputValue, setInputValue] = useState("");

//   // Function to handle changes in the input value
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="simpleInput">1 Rep Max </label>
//       <input
//         type="text"
//         id="simpleInput"
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//       <p>Entered Value: {inputValue}</p>
//     </div>
//   );
// };

// export default SimpleInput;
