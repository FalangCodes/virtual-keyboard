import React, { useState } from 'react';
import './Inputbar.css';

const Inputbar = ({ value, onChange }) => {
  const [isShiftPressed, setShiftPressed] = useState(false);
  const [clipboard, setClipboard] = useState('');  // Clipboard management for cut, copy, and paste
  
  const handleKeyPress = (key) => {
    // Handle shift + secondary character (alt)
    if (isShiftPressed) {
      if (key.alt) {
        onChange(value + key.alt);
      } else {
        onChange(value + key.label);
      }
    } else {
      onChange(value + key.label);
    }
  };

  const handleSpecialKeyPress = (key) => {
    switch (key) {
      case 'Backspace':
        onChange(value.slice(0, -1));
        break;
      case 'Enter':
        onChange(value + '\n');
        break;
      case 'Tab':
        onChange(value + '\t');
        break;
      case 'Ctrl+Z':
        // Implement Undo functionality here
        break;
      case 'Ctrl+C':
        setClipboard(value);
        break;
      case 'Ctrl+X':
        setClipboard(value);
        onChange('');
        break;
      case 'Ctrl+V':
        onChange(value + clipboard);
        break;
      case 'Caps Lock':
        // Toggle caps lock (optional behavior)
        break;
      default:
        break;
    }
  };

  return (
    <div className='Inputbar-wrapper'>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows="15"
        cols="50"
        className="input-bar"
      />
    </div>
  );
};

export default Inputbar;
