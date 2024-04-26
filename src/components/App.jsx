import { useState } from 'react';

// №2
// Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате 2025-12-31. По нажатию на кнопку найдите разницу между датами в днях и результат выведите в абзац.

// export const App = () => {
//   const [input1, setInput1] = useState('');
//   const [input2, setInput2] = useState('');
//   const [result, setResult] = useState('');
//   console.log('i1 :', input1);
//   console.log('i2 :', input2);

//   return (
//     <div>
//       <input
//         type="date"
//         onChange={event => {
//           setInput1(event.target.value);
//         }}
//       />
//       <input
//         type="date"
//         onChange={event => {
//           setInput2(event.target.value);
//         }}
//       />
//       <button>click me</button>
//       <p>{result}</p>
//     </div>
//   );
// };

// №4⊗
// Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац сумму цифр введенного числа.

// export const App = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [seveSumNum, setSaveSumNum] = useState(null);

//   function calculatesTheSumOfTheNumbers() {
//     const arrayOfDigits = Array.from(inputValue, Number);
//     const sumNum = arrayOfDigits.reduce((sum, elem) => {
//       return sum + elem;
//     }, 0);

//     setSaveSumNum(sumNum);
//   }

//   return (
//     <div>
//       <input
//         type="number"
//         onChange={e => {
//           setInputValue(e.target.value);
//         }}
//         value={inputValue}
//         onBlur={calculatesTheSumOfTheNumbers}
//       />
//       <p>{seveSumNum}</p>
//     </div>
//   );
// };

// export const App = () => {
//   const [checked, setChecked] = useState(true);

//   return (
//     <div>
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={() => {
//           setChecked(!checked);
//         }}
//       />
//       <p> state : {checked ? 'checked' : 'not checked'}</p>
//     </div>
//   );
// };

// export const App = () => {
//   const [checked, setChecked] = useState(true);
//   const [showStateCheckbox, setShowStateCheckbox] = useState(null);
//   const hadleClick = () => {
//     const res = checked ? 'checked' : 'not checked';

//     setShowStateCheckbox(res);
//   };

//   return (
//     <div>
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={() => {
//           setChecked(!checked);
//         }}
//       />
//       <br />
//       <button type="button" onClick={hadleClick}>
//         click me
//       </button>
//       <br />
//       <p>{showStateCheckbox}</p>
//     </div>
//   );
// };

export const App = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const arrLanguagesThatTheUserKnows = [];

  console.log(arrLanguagesThatTheUserKnows);

  const handleAnsewrUser = () => {
    [checked1, checked2, checked3].map(elem => {
      if (elem === true) {
        arrLanguagesThatTheUserKnows.push(elem);
      }
    });
  };

  return (
    <div>
      <form action="">
        <label htmlFor="">
          html
          <input
            type="checkbox"
            checked={checked1}
            onChange={() => {
              setChecked1(!checked1);
            }}
          />
        </label>
        <br />
        <label htmlFor="">
          css
          <input
            type="checkbox"
            checked={checked2}
            onChange={() => {
              setChecked2(!checked2);
            }}
          />
        </label>
        <br />
        <label htmlFor="">
          js
          <input
            type="checkbox"
            checked={checked3}
            onChange={() => {
              setChecked3(!checked3);
            }}
          />
        </label>
      </form>
      <div>
        {arrLanguagesThatTheUserKnows.map(elem => (
          <p>{elem}</p>
        ))}
      </div>
    </div>
  );
};
