import React, { useState } from 'react';
import './Calculator.css';
const Calculator = () => {
  const [input, setInput] = useState('0');
  const handleButtonClick = (value) => {
    if (input === '0' && value !== 'C') {
      setInput(value);
    } else if (value === '=' && input !== '0') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('0');
    } else {
      setInput(input + value);
    }
  };
  const renderButtons = (buttonValues) => {
    return buttonValues.map((value, index) => (
      <button
        key={index}
        onClick={() => handleButtonClick(value)}
        className={value === '=' ? 'equal' : ''}
      >
        {value}
      </button>
    ));
  };
  const buttonValues = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];
  return (
    <div className="calculator">
      <div className="output">{input}</div>
      <div className="buttons">{renderButtons(buttonValues)}</div>
    </div>
  );
};
export default Calculator;
