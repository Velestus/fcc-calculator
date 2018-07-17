import React from 'react';
import './display.css';

const Display = (props) => {
  return (
    <div className="Display">
      <div className="Display-text">
        <p id="display">{props.display}</p>
      </div>
      <div className="Display-equation">
        <p>{props.equation}</p>
      </div>
    </div>
  );
}

export default Display;