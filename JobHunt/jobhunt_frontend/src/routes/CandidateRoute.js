import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Jh_CandidateLayout } from "../components/Jh_layout/Jh_CandidateLayout/Jh_CandidateLayout";
import { userLandingPage } from '../config/usersLandingPage';
import { CommonRoutes } from "./components/CommonRoutes"
import { RouteMaker } from './components/RouteMaker';
const ExclusiveCandiadateRoutes=[
    { path: "/dashboard", pageName: 'CandidateDashboard' },
    { path: "/employers", pageName: 'EmployerList' },
    { path: "/employer/:id", pageName: 'EmployerSingle' },
    { path: "/jobs", pageName: 'JobList' },
    { path: "/job/:id", pageName: 'JobSingle' },
    { path: "/login", redirectTo: userLandingPage.candidate },
    { pageName: 'CandidateNotFoundPage' }
]
export const CandidateRoute = () => {
    return (
        <Jh_CandidateLayout>
            <Router>
                <Switch>
                    {[...CommonRoutes,...ExclusiveCandiadateRoutes].map((routeItem,index)=> RouteMaker(routeItem,index))}
                </Switch>
            </Router>
        </Jh_CandidateLayout>
    )
}
