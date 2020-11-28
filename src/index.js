import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { transitions, positions, Provider as AlertProvider, types } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const options = {
  position: positions.TOP_CENTER,
  timeout: 200,
  offset: '100px',
  transition: transitions.SCALE,
  type: types.SUCCESS
}

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AlertProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
