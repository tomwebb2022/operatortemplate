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
        placeholder="Enter your 1 REP MAX"
        onChange={handleInputChange1}
      />
      <input
        type="number"
        placeholder="Enter your 1 REP MAX"
        onChange={handleInputChange2}
      />
      <input
        type="number"
        placeholder="Enter your 1 REP MAX"
        onChange={handleInputChange3}
      />
    </div>
  );
}

export default Input;
