import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div>
      <h2>Live Calculator</h2>
      <input type="number" onChange={(e) => setNum1(Number(e.target.value))} placeholder="Enter Num 1" />
      <br /><br />
      <input type="number" onChange={(e) => setNum2(Number(e.target.value))} placeholder="Enter Num 2" />
      
      <div style={{ marginTop: "20px" }}>
        <p><strong>Addition:</strong> {num1 + num2}</p>
        <p><strong>Subtraction:</strong> {num1 - num2}</p>
        <p><strong>Multiplication:</strong> {num1 * num2}</p>
        <p><strong>Division:</strong> {num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero"}</p>
      </div>
    </div>
  );
}

export default Calculator;