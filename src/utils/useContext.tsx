import React from 'react';
import { Div } from '../components/Div';
import { AppContext } from '../contexts/AppContext';

function UseContext() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default UseContext;
