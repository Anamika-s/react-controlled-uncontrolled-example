import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormsDemo from './FormsDemo';
import AddNumbers from './AddNumbers';
import UnControlledDemo from './UnControlledDemo';
import AddNumbersUsingUC from './AddNumbersUsingUC';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 {/* <FormsDemo/> */}
 <AddNumbers no1={2} no2={12} />  
 {/* <UnControlledDemo/>  */}
 <AddNumbersUsingUC/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
