import React from 'react';
import './Inputbar.css';

const Inputbar = ({ value, onChange }) => {
  return (
    <div className='Inputbar-wrapper'>
        <textarea
        value={value}
        onChange={onChange}
        rows="15"
        cols="50"
        className="input-bar" 
        />
    </div>
  );
};

export default Inputbar;
