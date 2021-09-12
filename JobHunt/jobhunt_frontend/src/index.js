import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import {Jh_MainLayout} from './components/Jh_layout/Jh_MainLayout/Jh_MainLayout'
// import { HomePage } from './Pages/HomePage/HomePage';
// import {CandidateDashboard} from './Pages/CandidateDashboard/CandidateDashboard'
// import {Jh_CandidateLayout} from './components/Jh_layout/Jh_CandidateLayout/Jh_CandidateLayout'
import {Jh_EmployerLayout} from './components/Jh_layout/Jh_EmployerLayout/Jh_EmployerLayout'
// import { EmployerManageJobs } from './Pages/EmployerManageJobs/EmployerManageJobs';
// import { EmployerSingle } from './Pages/EmployerSingle/EmployerSingle';
import {EmployerList} from './Pages/EmployerList/EmployerList'
// import {BlogList} from './Pages/BlogList/BlogList'
import {BlogSingle} from './Pages/BlogSingle/BlogSingle'
import { BlogList } from './Pages/BlogList/BlogList';
import {AboutUs} from './Pages/AboutUs/AboutUs'
import { HomePage } from './Pages/HomePage/HomePage';
import { ContactUs } from './Pages/ContactUs/ContactUs';
import {FAQ} from './Pages/FAQ/FAQ';
import { Pricing } from './Pages/Pricing/Pricing';
import { Terms } from './Pages/Terms/Terms';
import { HowItWorks } from './Pages/HowItWorks/HowItWorks';
  // <Jh_MainLayout children={<HomePage/>}/> 
  // <Jh_CandidateLayout children={<CandidateDashboard/>}/>
  ReactDOM.render(
    <Jh_EmployerLayout children={<HowItWorks/>}/>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
