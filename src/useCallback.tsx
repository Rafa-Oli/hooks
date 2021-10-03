import React, { useCallback, useState } from 'react';

const Button = React.memo(function Button({ incrementButton }: any) {
  return <button onClick={() => incrementButton(10)}>+</button>;
});

function UseCallback() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((counter) => counter + num);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador: {counter}</h1>
        <Button incrementButton={incrementCounter} />
      </header>
    </div>
  );
}

export default UseCallback;
