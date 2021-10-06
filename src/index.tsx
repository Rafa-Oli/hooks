import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UseContext from './useContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseState /> */}
    {/* <UseEffect /> */}
    {/* <UseCallback /> */}
    {/* <UseMemo /> */}
    {/* <UseRef /> */}
    <UseContext />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
