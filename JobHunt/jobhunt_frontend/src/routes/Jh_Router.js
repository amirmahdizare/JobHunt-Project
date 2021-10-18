import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../api/authentication'
import { _getRoll } from '../api/authentication/UseProvideAuth/methods/getRoll'
import { userLandingPage } from '../config/usersLandingPage'
import { getToken, getUser } from '../utils'
import { CandidateRoute } from './CandidateRoute'
import { EmployerRoute } from './EmployerRoute'
import  {PublicRoute}  from './PublicRoute'
const Jh_Router = () => {
    
    const auth = useAuth()
    const chooseRoute = () => {
        switch (auth.user) {
            case 'candidate':return <CandidateRoute/>
            case 'employer': return <EmployerRoute/>
            default: return <PublicRoute/>
        }
    }
    return (
        <>
           {chooseRoute()} 
        </>
    )
}
export default Jh_Router