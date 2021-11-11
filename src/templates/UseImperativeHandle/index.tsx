import { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';

export const UseImperativeHandle = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);

  const divRef = useRef();

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 300)
      // @ts-ignore: Object is possibly 'null'.
      divRef!.current?.divRef.scrollTop = divRef!.current?.scrollHeight;
  });

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      {/* <DisplayCounted counted={counted} ref={divRef}></DisplayCounted> */}
    </>
  );
};

// export const DisplayCounted = forwardRef(function DisplayCounted({ counted }, ref) {
//   const [rand, setRand] = useState('0.24');
//   const divRef = useRef();
//   const handleClick = () => {
//     setRand(Math.random().toFixed(2));
//   };
//   useImperativeHandle(ref, () => ({
//     handleClick,
//     divRef: divRef.current,
//   }));
//   return (
//     <div ref={divRef} style={{ height: '100px', width: '100px', overflowY: 'scroll' }}>
//       {counted.map((c) => {
//         return (
//           <p key={`c-${c}`} onClick={handleClick}>
//             {c} +++ {rand}
//           </p>
//         );
//       })}
//     </div>
//   );
// });
