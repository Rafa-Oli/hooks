import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// function UseState() {
//   const [counter, setCounter] = useState(0);

//   //componentDidUpdate - runs every time the component updates
//   useEffect(() => {
//     console.log('componentDidUpdate');
//   });
//   //componentDidMont - run 1x
//   useEffect(() => {
//     console.log('componentDidMount');
//   }, []);

//   //With dependence - run every time the dependency changes
//   useEffect(() => {
//     console.log('accountant changed to ', counter);
//   }, [counter]);

//   return (
//     <div className="App">
//       <h1>Contador : {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>+</button>
//     </div>
//   );
// }

function UseState() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };
  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter}</h1>

        <p>
          <button type="button" onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleIncrement}>
            Increment {counter}
          </button>
        </p>
      </header>
    </div>
  );
}

export default UseState;
