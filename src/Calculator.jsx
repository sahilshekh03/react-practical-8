import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("+");

  const calculate = () => {
    const a = Number(num1);
    const b = Number(num2);

    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }

    let answer;

    switch (operator) {
      case "+":
        answer = a + b;
        break;
      case "-":
        answer = a - b;
        break;
      case "*":
        answer = a * b;
        break;
      case "/":
        if (b === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        answer = a / b;
        break;
      default:
        answer = 0;
    }

    setResult(answer);
  };

  const clearCalculator = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setOperator("+");
  };

  return (
    <main className="page">
      <section className="card">
        <h1>Basic Calculator</h1>

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (×)</option>
          <option value="/">Division (÷)</option>
        </select>

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <div className="buttons">
          <button onClick={calculate}>Calculate</button>
          <button className="clear" onClick={clearCalculator}>Clear</button>
        </div>

        {result !== "" && (
          <div className="result">
            <p>Result</p>
            <strong>{result}</strong>
          </div>
        )}
      </section>
    </main>
  );
}

export default Calculator;
