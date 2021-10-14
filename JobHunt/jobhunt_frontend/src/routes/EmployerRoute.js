import React from 'react'
import { BrowserRouter as Router,Switch } from 'react-router-dom'
import { Jh_EmployerLayout } from '../components/Jh_layout/Jh_EmployerLayout/Jh_EmployerLayout'
import { CommonRoutes } from './components/CommonRoutes'
import { RouteMaker } from './components/RouteMaker'
const ExclusiveEmployerRoutes=[
    { path: "/managejobs", pageName: 'EmployerManageJobs' },
    { path: "/employers", pageName: 'EmployerList' },
    { path: "/employer/:id", pageName: 'EmployerSingle' },
    { path: "/jobs", pageName: 'JobList' },
    { path: "/job/:id", pageName: 'JobSingle' },
    { path: "/pricing", pageName: 'Pricing' },
    { pageName: 'EmployerNotFoundPage' }
]
export const EmployerRoute = () => {
    return (
        <Jh_EmployerLayout>
            <Router>
                <Switch>
                    {[...CommonRoutes,...ExclusiveEmployerRoutes].map((routeItem,index)=>RouteMaker(routeItem,index))}
                </Switch>
            </Router>
        </Jh_EmployerLayout>
    )
}
