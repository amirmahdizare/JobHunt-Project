import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { EmployerLayout } from '../components/Jh_layout/EmployerLayout/EmployerLayout'
import { userLandingPage } from '../config/usersLandingPage'
import { CommonRoutes } from './components/CommonRoutes'
import { RouteMaker } from './components/RouteMaker'
const ExclusiveEmployerRoutes = [
    { path: "/dashboard/:section?", pageName: 'EmployerDashboard' },
    { path: "/employers", pageName: 'EmployerList' },
    { path: "/employer/:id", pageName: 'EmployerSingle' },
    { path: "/login", redirectTo: userLandingPage.employer },
    { pageName: 'EmployerNotFoundPage' },
]
export const EmployerRoute = () => {
    return (
        <EmployerLayout>
            <Router>
                <Switch>
                    {[...CommonRoutes, ...ExclusiveEmployerRoutes].map((routeItem, index) => RouteMaker(routeItem, index))}
                </Switch>
            </Router>
        </EmployerLayout>
    )
}
