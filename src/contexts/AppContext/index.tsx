import React, { useState } from 'react';
import { GlobalContext } from './context';
import { globalState } from './data';

export const AppContext = ({ children }: any) => {
  const [contextState, setContextState] = useState(globalState);

  return <GlobalContext.Provider value={{ contextState, setContextState }}>{children}</GlobalContext.Provider>;
};
