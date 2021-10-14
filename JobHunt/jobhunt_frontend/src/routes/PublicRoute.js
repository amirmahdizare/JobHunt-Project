import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Jh_MainLayout } from '../components/Jh_layout'
import { CommonRoutes } from './components/CommonRoutes'
import { RouteMaker } from './components/RouteMaker'
const ExclusivePublicRoutes = [
    { path: "/forgotpassword", pageName: 'ForgotPassword' },
    { path: "/login", pageName: 'LoginPage' },
    { pageName: 'PublicNotFoundPage' }
]
const PublicRoute = () => {
    return (
        <Jh_MainLayout>
            <Router>
                <Switch>
                    {[ ...CommonRoutes,...ExclusivePublicRoutes].map((routeItem, index) =>RouteMaker(routeItem,index) )}
                </Switch>
            </Router>
        </Jh_MainLayout>
    )
}
export { PublicRoute }