import React, { useContext, useState } from 'react';

const globalState = {
  title: 'The title of context',
  counter: 0,
  body: 'body of context',
};

const GlobalContext = React.createContext(undefined);

const Div = () => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body },
    setContextState,
  } = theContext;
  return <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>{body}</p>;
};

function UseContext() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default UseContext;
