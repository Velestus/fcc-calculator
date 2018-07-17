import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <div className={props.value === "ac" || props.value === "ce" ? "Button Button-red": "Button"}
      value={props.value} id={props.buttonId}
      style={props.value === "0" ? {width: '112px'}: props.value === "=" ? {height: '90px', marginBottom: '-40px'}: {}}
      onClick={() => props.onClick(props.value)}
    >
      {props.label}
    </div>
  );
}

export default Button;