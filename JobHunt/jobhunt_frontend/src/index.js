import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Jh_EmployerLayout} from './components/Jh_layout/Jh_EmployerLayout/Jh_EmployerLayout'
import { HowItWorks } from './Pages/index';
  ReactDOM.render(
    <Jh_EmployerLayout children={<HowItWorks/>}/>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
