import React from 'react';

const buttons = [
  'AC', '+/-', '%', '÷',
  '7', '8', '9', 'x',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
];

const BuildArray = () => {
  const buttonsArray = [];
  buttons.forEach((button) => buttonsArray.push(
    <button className="calc-buttons" type="button">{button}</button>,
  ));
  return buttonsArray;
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="calculator">
        <div id="calc-display">
          <input />
        </div>
        <div id="calc-buttons">
          <BuildArray />
        </div>
      </div>
    );
  }
}

export default Calculator;
