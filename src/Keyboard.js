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
    { label: "Ctrl", className: "ctrl" },
    {
      className: "arrow-container",
      content: (
        <div className="key arrow-container">
          <div className="arrow arrow-left">
            <FaChevronLeft />
          </div>
          <div className="arrow-up-down">
            <div className="arrow arrow-up">
              <FaChevronUp />
            </div>
            <div className="arrow arrow-down">
              <FaChevronDown />
            </div>
          </div>
          <div className="arrow arrow-right">
            <FaChevronRight />
          </div>
        </div>
      ),
    },
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
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((key, keyIndex) =>
            key.content ? (
              // Render a custom key structure for the arrows
              <div key={keyIndex} className={`key ${key.className}`}>
                {key.content}
              </div>
            ) : (
              // Render standard keys as buttons
              <button
                key={keyIndex}
                className={`key ${key.className} ${
                  key.label === "Caps Lock" && isCapsLockOn ? "active" : ""
                }`}
                onClick={() => handleKeyClick(key.label)}
              >
                {key.icon || (
                  <>
                    <span className="main-char">{key.label}</span>
                    {key.alt && <span className="alt-char">{key.alt}</span>}
                  </>
                )}
              </button>
            )
          )}
        </div>
      ))}
    </div>
  );
  
}

export default Keyboard;
