import React from 'react';
import './Inputbar.css'

const Inputbar = React.forwardRef((props, ref) => {
  return (
    <div className='Inputbar-wrapper'>
      <textarea
      ref={ref}
      value={props.value}
      onChange={props.onChange}
      className="input-bar"
    />
    </div>
    
  );
});

export default Inputbar;
