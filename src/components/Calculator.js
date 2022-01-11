const Calculator = () => {
  const buttons = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  const buttonsArray = [];
  buttons.forEach((button) => buttonsArray.push(
    <button className="calc-buttons" type="button">{button}</button>,
  ));
  return (
    <div id="calculator">
      <div id="calc-display">
        <input />
      </div>
      <div id="calc-buttons">
        {buttonsArray}
      </div>
    </div>
  );
};

export default Calculator;
