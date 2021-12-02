import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { MainLayout } from '../components/Jh_layout'
import { CommonRoutes } from './components/CommonRoutes'
import { RouteMaker } from './components/RouteMaker'
const ExclusivePublicRoutes = [
    { path: "/forgotpassword", pageName: 'ForgotPassword' },
    { path: "/login", pageName: 'LoginPage' },

    { pageName: 'PublicNotFoundPage' }
]
const PublicRoute = () => {
    return (
        <MainLayout>
            <Router>
                <Switch>
                    {[ ...CommonRoutes,...ExclusivePublicRoutes].map((routeItem, index) =>RouteMaker(routeItem,index) )}
                </Switch>
            </Router>
        </MainLayout>
    )
}
export { PublicRoute }