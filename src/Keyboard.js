import React from "react";
import { FaWindows, FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Keyboard.css";

const keys = [
  [
    { label: "`", alt: "~", className: "key" },
    { label: "1", alt: "!", className: "key" },
    { label: "2", alt: "@", className: "key" },
    { label: "3", alt: "#", className: "key" },
    { label: "4", alt: "$", className: "key" },
    { label: "5", alt: "%", className: "key" },
    { label: "6", alt: "^", className: "key" },
    { label: "7", alt: "&", className: "key" },
    { label: "8", alt: "*", className: "key" },
    { label: "9", alt: "(", className: "key" },
    { label: "0", alt: ")", className: "key" },
    { label: "-", alt: "_", className: "key" },
    { label: "=", alt: "+", className: "key" },
    { label: "Backspace", className: "backspace" },
  ],
  [
    { label: "Tab", className: "tab" },
    { label: "Q", className: "key" },
    { label: "W", className: "key" },
    { label: "E", className: "key" },
    { label: "R", className: "key" },
    { label: "T", className: "key" },
    { label: "Y", className: "key" },
    { label: "U", className: "key" },
    { label: "I", className: "key" },
    { label: "O", className: "key" },
    { label: "P", className: "key" },
    { label: "[", alt: "{", className: "key" },
    { label: "]", alt: "}", className: "key" },
    { label: "\\", alt: "|", className: "key" },
  ],
  [
    { label: "Caps Lock", className: "caps-lock" },
    { label: "A", className: "key" },
    { label: "S", className: "key" },
    { label: "D", className: "key" },
    { label: "F", className: "key" },
    { label: "G", className: "key" },
    { label: "H", className: "key" },
    { label: "J", className: "key" },
    { label: "K", className: "key" },
    { label: "L", className: "key" },
    { label: ";", alt: ":", className: "key" },
    { label: "'", alt: '"', className: "key" },
    { label: "Enter", className: "enter" },
  ],
  [
    { label: "Shift", className: "shift" },
    { label: "Z", className: "key" },
    { label: "X", className: "key" },
    { label: "C", className: "key" },
    { label: "V", className: "key" },
    { label: "B", className: "key" },
    { label: "N", className: "key" },
    { label: "M", className: "key" },
    { label: ",", alt: "<", className: "key" },
    { label: ".", alt: ">", className: "key" },
    { label: "/", alt: "?", className: "key" },
    { label: "Shift", className: "shift" },
  ],
  [
    { label: "Ctrl", className: "ctrl" },
    { label: "Fn", className: "fn" },
    { label: "Windows", icon: <FaWindows />, className: "windows" },
    { label: "Alt", className: "alt" },
    { label: "Space", className: "space" },
    { label: "Alt", className: "alt" },
    { label: "Ctrl", className: "ctrl" }
  ]
];


function Keyboard({ onButtonClick, isCapsLockOn }) {
  const handleKeyClick = (key) => {
    if (onButtonClick) {
      onButtonClick(key);
    }
  };

  return (
    <div className="keyboard">
      {keys.slice(0, 4).map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              className={`key ${key.className}`}
              onClick={() => handleKeyClick(key.label)}
            >
              {key.icon || (
                <div className="key-content">
                  <span className="primary">{key.label}</span>
                  {key.alt && <span className="secondary">{key.alt}</span>}
                </div>
              )}
            </button>
          ))}
        </div>
      ))}
      <div className="row">
        {keys[4].map((key, keyIndex) => (
          <button
            key={keyIndex}
            className={`key ${key.className}`}
            onClick={() => handleKeyClick(key.label)}
          >
            {key.icon || (
              <div className="key-content">
                <span className="primary">{key.label}</span>
                {key.alt && <span className="secondary">{key.alt}</span>}
              </div>
            )}
          </button>
        ))}
        <div className="arrow-container">
          <button className="arrow-left">
            <FaChevronLeft />
          </button>
          <div className="arrow-vertical">
            <button className="arrow-up">
              <FaChevronUp />
            </button>
            <button className="arrow-down">
              <FaChevronDown />
            </button>
          </div>
          <button className="arrow-right">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default Keyboard;