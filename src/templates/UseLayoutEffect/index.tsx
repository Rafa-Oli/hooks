import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const UseLayoutEffect = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);

  const divRef = useRef();

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 300)
      // @ts-ignore: Object is possibly 'null'.
      divRef!.current?.scrollTop = divRef!.current?.scrollHeight;
  });

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <div ref={divRef} style={{ height: '100px', width: '100px', overflowY: 'scroll' }}>
        {counted.map((c) => {
          return <p key={`c-${c}`}>{c}</p>;
        })}
      </div>
    </>
  );
};
