import React, { useState } from 'react';
import calculate from '../logic/calculate';

const buttons = [
  'AC', '+/-', '%', '÷',
  '7', '8', '9', 'x',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
];

const Calculator = () => {
  const [previousState, setState] = useState({ total: 0 });
  const handleEvent = (e) => {
    setState(calculate(previousState, e.target.innerText));
  };

  const buildArray = () => {
    const buttonsArray = [];
    buttons.forEach((button) => buttonsArray.push(
      <button key={button} onClick={handleEvent} className="calc-buttons" type="button">{button}</button>,
    ));
    return buttonsArray;
  };
  const { total, next, operation } = previousState;
  return (
    <div id="calculator">
      <div id="calc-display">
        {total}
        {operation}
        {next}
      </div>
      <div id="calc-buttons">
        {buildArray()}
      </div>
    </div>
  );
};

export default Calculator;
