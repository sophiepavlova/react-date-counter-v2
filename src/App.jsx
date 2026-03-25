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

  function handleReset() {
    setStep(1);
    setCount(0);
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
          min='1'
          max='10'
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        <p>{step}</p>
      </div>
      <div className='counts'>
        <button onClick={handleCountMinus}>-</button>
        <input
          type='number'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={handleCountPlus}>+</button>
      </div>

      <p className='message'>
        {count === 0 && `Today is ${formattedDate}`}
        {count > 0 && `${count} days from today is ${formattedDate}`}
        {count < 0 && `${Math.abs(count)} days ago was ${formattedDate}`}
      </p>
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}
