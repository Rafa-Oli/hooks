import React, { useEffect, useRef, useState } from 'react';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef(null);

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      cb();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

function HookCustom() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [increment, setIncrement] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h1>Contador:{counter}</h1>
      <h1>Delay:{delay}</h1>
      <button
        onClick={() => {
          setDelay((d) => d + increment);
        }}
      >
        +{increment}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - increment);
        }}
      >
        -{increment}
      </button>
      <input type="text" value={increment} onChange={(e: any) => setIncrement(Number(e?.target?.value))} />
    </div>
  );
}

export default HookCustom;
