import './App.css';
import { useEffect, useState } from 'react';

const eventFn = () => {
  console.log('h1 click');
};

function UseEffect() {
  const [counter, setCounter] = useState(0);

  //componentDidUpdate - runs every time the component updates
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //componentDidMont - run 1x

  //   useEffect(() => {
  //     console.log('componentDidMount');
  //   }, []);

  useEffect(() => {
    document.querySelector('h1').addEventListener('click', eventFn);

    //componentWillUmount - cleaning
    return () => {
      document.querySelector('h1').removeEventListener('click', eventFn);
    };
  }, []);

  //With dependence - run every time the dependency changes
  useEffect(() => {
    console.log('accountant changed to ', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}
export default UseEffect;
