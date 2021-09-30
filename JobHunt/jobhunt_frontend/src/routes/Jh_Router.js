import React from 'react'
import { useAuth } from '../api/authentication'
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