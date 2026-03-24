import { useState } from 'react';
import './App.css';

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
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  }
  const formattedDate = getFormattedDate();
  return (
    <div className='container'>
      <div className='steps'>
        <input
          type='range'
          value={step}
          min='0'
          max='10'
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        <p>{step}</p>
      </div>
      <div className='counts'>
        <button onClick={handleCountMinus}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleCountPlus}>+</button>
      </div>

      <p className='message'>
        {count === 0 && `Today is ${formattedDate}`}
        {count > 0 && `${count} days from today is ${formattedDate}`}
        {count < 0 && `${Math.abs(count)} days ago was ${formattedDate}`}
      </p>
    </div>
  );
}
