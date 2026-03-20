import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStepPlus() {
    setStep((s) => s + 1);
  }

  function handleStepMinus() {
    if (step > 1) setStep((s) => s - 1);
    // step > 1 ? setStep((s) => s - 1) : step;
  }

  function handleCountPlus() {
    setCount((c) => c + step);
  }

  function handleCountMinus() {
    setCount((c) => c - step);
  }

  function getFormattedDate() {
    const date = new Date();
    const dayNumber = date.getDate() + count;
    date.setDate(dayNumber);
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  }
  const formattedDate = getFormattedDate();
  return (
    <div className="container">
      <div className="steps">
        <button onClick={handleStepMinus}>-</button>
        <p>Step: {step}</p>
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div className="counts">
        <button onClick={handleCountMinus}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleCountPlus}>+</button>
      </div>

      <p className="message">
        {count === 0 && `Today is ${formattedDate}`}
        {count > 0 && `${count} days from today is ${formattedDate}`}
        {count < 0 && `${Math.abs(count)} days ago was ${formattedDate}`}
        {/* {count === 0 && `Today is ${getFormattedDate()}`}
        {count > 0 && `${count} days from today is ${getFormattedDate()}`}
        {count < 0 && `${Math.abs(count)} days ago was ${getFormattedDate()}`} */}
      </p>
    </div>
  );
}
