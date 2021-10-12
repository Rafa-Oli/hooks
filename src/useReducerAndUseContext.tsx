import React, { createContext, useContext, useReducer, useRef } from 'react';

export const globalState = {
  title: 'The title of context',
  counter: 0,
  body: 'body of context',
};

export const actions = {
  CHANGED_TITLE: 'CHANGED_TITLE',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGED_TITLE:
      return { ...state, title: action.payload };
  }
  return { ...state };
};

export const Context = createContext(undefined);
export const AppContext = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload: string) => {
    dispatch({ type: actions.CHANGED_TITLE, payload });
  };

  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef(null);

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

function UseReducerAndContext() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default UseReducerAndContext;
