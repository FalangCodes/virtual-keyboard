import React, { useState } from "react";
import './App.css';
import Keyboard from './Keyboard';
import Inputbar from './InputBar';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (key) => {
    if (key.label === "Backspace") {
      setInputValue((prev) => prev.slice(0, -1));
    } else if (key.label === "Enter") {
      setInputValue((prev) => prev + "\n");
    } else if (key.label === "Space") {
      setInputValue((prev) => prev + " ");
    } else if (key.alt) {
      setInputValue((prev) => prev + key.label); // Default to primary label
    } else {
      setInputValue((prev) => prev + key.label);
    }
  };

  return (
    <div className="app">
      <Inputbar 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
      <Keyboard onButtonClick={handleButtonClick} />

      <div className='footer'>
        <ul>
          <li>&copy; Kgotsofalang Kakudi 2025. All rights reserved.</li>
          <div className='icons'>
            <li><a href='https://github.com/FalangCodes'><FaGithub/></a></li>
            <li><a href='https://www.linkedin.com/in/kgotsofalang-kakudi-822214230/'><FaLinkedin/></a></li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
