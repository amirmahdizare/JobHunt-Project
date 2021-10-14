import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { LoadablePage } from './Loadable/LoadablePage'
export const RouteMaker = ({ path, pageName, redirectTo } ,key) => {
    const Path = path ? path : undefined
    const RouteToPagechildren = pageName ? <LoadablePage pageName={pageName} /> : null
    const Redirectchildren = redirectTo ? <Redirect to={redirectTo} /> : null
    return (
        <Route
        key={key}
            exact
            path={Path}
            children={RouteToPagechildren || Redirectchildren}
        />
    )
}

