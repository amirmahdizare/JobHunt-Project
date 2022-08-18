import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HomePage } from './Pages/index';
import {Jh_MainLayout} from './components/Jh_layout/index'
  ReactDOM.render(
    <Jh_MainLayout children={<HomePage/>}/>
  ,document.getElementById('root')
);
reportWebVitals();
