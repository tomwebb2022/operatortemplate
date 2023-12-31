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
  const handleButtonClick = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.amazon.co.uk/Tactical-Barbell-Definitive-Strength-Operational-ebook/dp/B01G195QU2/ref=sr_1_1?crid=2HRFB8QHNA1CF&keywords=tactical+barbell&qid=1703245189&sprefix=tactical+barbell%2Caps%2C122&sr=8-1">
          <img src={logo} className="App-logo" alt="logo" />
        </a>

        <p>Operator Template</p>
      </header>
      <body>
        <Input
          onInputChange1={setInputValue1}
          onInputChange2={setInputValue2}
          onInputChange3={setInputValue3}
        />
        {/* <button onClick={() => setRoundTo(5)}>Round to 5</button>
        <button onClick={() => setRoundTo(2.5)}>Round to 2.5</button> */}
        {/* <button onClick={handleButtonClick}>Convert to lbs</button> */}
        <Table input1={inputValue1} input2={inputValue2} input3={inputValue3} />
        {/* Displaying the link with text */}
        <p>
          If you find this useful, consider{" "}
          <a
            href="https://www.buymeacoffee.com/goosesquad"
            target="_blank"
            rel="noopener noreferrer">
            {/* style={{ color: "white" }} */}
            buying me a pint.
          </a>
        </p>
        <p>
          {" "}
          Note: This is no an offical product from Tactical Barbell. You can
          access the book by clickin the logo. This website is made by{" "}
          <a href="https://tomwebbsite.vercel.app"> me </a>
        </p>
      </body>
    </div>
  );
}

export default App;

/*
things to do:
change the weight so it has to be a possible weight to use.
2.5kg increments
*/
