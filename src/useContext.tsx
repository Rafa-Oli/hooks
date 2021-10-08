import React from 'react';
import { AppContext } from './contexts/AppContext';
import { Div } from './components/Div/index';

function UseContext() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default UseContext;
