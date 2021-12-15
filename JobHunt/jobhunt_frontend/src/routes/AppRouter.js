import React from 'react'
import { useAuth } from '../api/authentication'
import { _getRoll } from '../api/authentication/UseProvideAuth/methods/getRoll'
import { CandidateRoute } from './CandidateRoute'
import { EmployerRoute } from './EmployerRoute'
import  {PublicRoute}  from './PublicRoute'
const AppRouter = () => {
    const auth = useAuth()
    const AppRoute = () => {
        switch (auth.user) {
            case 'candidate':return <CandidateRoute/>
            case 'employer': return <EmployerRoute/>
            default: return <PublicRoute/>
        }
    }
    return (
        <>
           <AppRoute/>
        </>
    )
}
export default AppRouter