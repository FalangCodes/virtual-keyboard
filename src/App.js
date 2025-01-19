import React, { useState, useRef } from "react";
import './App.css';
import Keyboard from './Keyboard';
import Inputbar from './InputBar';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isCapsLockActive, setIsCapsLockActive] = useState(false);
  const [isShiftActive, setIsShiftActive] = useState(false);
  const [isCtrlActive, setIsCtrlActive] = useState(false);
  const inputRef = useRef(null);

  const handleButtonClick = (key) => {
    const isLetter = key.label.length === 1 && /^[a-zA-Z]$/.test(key.label);

    if (isCtrlActive) {
      // Handle Ctrl shortcuts
      const textarea = inputRef.current;
      if (key.label === "C") {
        // Copy
        const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
        navigator.clipboard.writeText(selectedText);
      } else if (key.label === "V") {
        // Paste
        navigator.clipboard.readText().then((text) => {
          const selectionStart = textarea.selectionStart;
          const selectionEnd = textarea.selectionEnd;
          const newValue =
            inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionEnd);
          setInputValue(newValue);
        });
      } else if (key.label === "X") {
        // Cut
        const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
        navigator.clipboard.writeText(selectedText);
        const newValue =
          inputValue.slice(0, textarea.selectionStart) + inputValue.slice(textarea.selectionEnd);
        setInputValue(newValue);
      }
      setIsCtrlActive(false); // Reset Ctrl state after use
      return; // Exit further processing
    }

    switch (key.label) {
      case "Backspace":
        setInputValue((prev) => prev.slice(0, -1));
        break;
      case "Enter":
        setInputValue((prev) => prev + "\n");
        break;
      case "Space":
        setInputValue((prev) => prev + " ");
        break;
      case "Shift":
        setIsShiftActive(!isShiftActive);
        break;
      case "Caps Lock":
        setIsCapsLockActive(!isCapsLockActive);
        break;
      case "Ctrl":
        setIsCtrlActive(true);
        break;
      case "Tab":
        setInputValue((prev) => prev + "    ")
        break;
      default:
        if (isLetter) {
          let modifiedLetter = key.label;
          if (isShiftActive !== isCapsLockActive) {
            modifiedLetter = modifiedLetter.toUpperCase();
          } else {
            modifiedLetter = modifiedLetter.toLowerCase();
          }
          setInputValue((prev) => prev + modifiedLetter);
        } else {
          setInputValue((prev) => prev + key.label);
        }
        return;
        
    }
  };

  return (
    <div className="app">
      <Inputbar
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef} // Forward the ref to the InputBar component
      />
      <Keyboard onButtonClick={handleButtonClick} />

      <div className="footer">
        <ul>
          <li>&copy; Kgotsofalang Kakudi 2025. All rights reserved.</li>
          <div className="icons">
            <li><a href="https://github.com/FalangCodes"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/kgotsofalang-kakudi-822214230/"><FaLinkedin /></a></li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
