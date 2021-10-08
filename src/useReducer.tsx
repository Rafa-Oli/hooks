import React, { useReducer } from 'react';

export const globalState = {
  title: 'The title of context',
  counter: 0,
  body: 'body of context',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change': {
      return { ...state, title: action.payload };
    }
    case 'reverse': {
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  return { ...state };
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'change', payload: new Date().toLocaleString('pt-BR') })}>Click</button>
      <button onClick={() => dispatch({ type: 'reverse' })}>Reverse</button>
    </div>
  );
}

export default UseReducer;
