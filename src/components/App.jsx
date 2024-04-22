import { useState } from 'react';

// №2
// Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате 2025-12-31. По нажатию на кнопку найдите разницу между датами в днях и результат выведите в абзац.

export const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  console.log('i1 :', input1);
  console.log('i2 :', input2);

  return (
    <div>
      <input
        type="date"
        onChange={event => {
          setInput1(event.target.value);
        }}
      />
      <input
        type="date"
        onChange={event => {
          setInput2(event.target.value);
        }}
      />
      <button>click me</button>
      <p>{result}</p>
    </div>
  );
};
