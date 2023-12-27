import "./App.css";
import logo from "./logo_1.png";
import Table from "./Table";
import Input from "./Input";
import React, { useState } from "react";
// checking this is uploading to GitHub

function App() {
  //state to hold the 1 rep max value
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.amazon.co.uk/Tactical-Barbell-Definitive-Strength-Operational-ebook/dp/B01G195QU2/ref=sr_1_1?crid=2HRFB8QHNA1CF&keywords=tactical+barbell&qid=1703245189&sprefix=tactical+barbell%2Caps%2C122&sr=8-1">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>Operator Template</p>
      </header>
      <Input
        onInputChange1={setInputValue1}
        onInputChange2={setInputValue2}
        onInputChange3={setInputValue3}
      />
      <Table input1={inputValue1} input2={inputValue2} input3={inputValue3} />
    </div>
  );
}

export default App;
