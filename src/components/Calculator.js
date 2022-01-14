import React from 'react';
import calculate from '../logic/calculate';

const buttons = [
  'AC', '+/-', '%', '÷',
  '7', '8', '9', 'x',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.buildArray = this.buildArray.bind(this);
    this.state = { total: '0', next: null, operation: null };
  }

  handleEvent = (e) => {
    this.setState((previousState) => calculate(previousState, e.target.innerText));
  }

  buildArray = () => {
    const buttonsArray = [];
    buttons.forEach((button) => buttonsArray.push(
      <button key={button} onClick={this.handleEvent} className="calc-buttons" type="button">{button}</button>,
    ));
    return buttonsArray;
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="calculator">
        <div id="calc-display">
          {total}
          {operation}
          {next}
        </div>
        <div id="calc-buttons">
          {this.buildArray()}
        </div>
      </div>
    );
  }
}

export default Calculator;
