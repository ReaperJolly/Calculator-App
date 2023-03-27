import React, { useState } from "react";
import "./styles.css";

function App() {
  const [previousOperand, setPreviousOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (event) => {
    console.log("Number is clicked!");
    const value = event.target.value;
    setCurrentOperand(currentOperand + value);
  };

  const handleOperatorClick = (event) => {
    console.log("Operator is clicked!");
    const value = event.target.value;
    setOperator(value);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  };

  const handleEqualClick = () => {
    console.log("Equal is clicked");
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    let result;
  

    switch(operator) {
      case "+":
        result = previous + current;
      break;
      case "-":
        result = previous - current;
      break;
      case "*":
        result = previous * current;
      break;
      case "/":
        result = previous / current;
      break;
      default:
        result = current;
      break;
    }

    setPreviousOperand("");
    setCurrentOperand(result.toString());
    setOperator("");
  };

 const handleClearClick = () => {
    console.log("Clear is clicked!");
    setPreviousOperand("");
    setCurrentOperand("");
    setOperator("");
 };

 const handleDeleteClick = () => {
    console.log("Delete is clicked!");
    setCurrentOperand(currentOperand.slice(0, -1));
 };
 
return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button onClick={handleClearClick} className="span-two" value="C">C</button>
      <button onClick={handleDeleteClick} value="DEL">DEL</button>
      <button onClick={handleOperatorClick} value="/">/</button>
      <button onClick={handleNumberClick} value="7">7</button>
      <button onClick={handleNumberClick} value="8">8</button>
      <button onClick={handleNumberClick} value="9">9</button>
      <button onClick={handleOperatorClick} value="*">*</button>
      <button onClick={handleNumberClick} value="4">4</button>
      <button onClick={handleNumberClick} value="5">5</button>
      <button onClick={handleNumberClick} value="6">6</button>
      <button onClick={handleOperatorClick} value="+">+</button>
      <button onClick={handleNumberClick} value="1">1</button>
      <button onClick={handleNumberClick} value="2">2</button>
      <button onClick={handleNumberClick} value="3">3</button>
      <button onClick={handleOperatorClick}value="-">-</button>
      <button onClick={handleNumberClick} value=".">.</button>
      <button onClick={handleNumberClick} value="0">0</button>
      <button onClick={handleEqualClick} className="span-two">=</button>
    </div>
  );
 }

export default App;
