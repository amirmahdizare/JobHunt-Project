import React from 'react'
import { Box } from '@material-ui/core'
import { useAuth } from '../api/authentication'
import { LanguageLoading } from '../components/Jh_layout/components/LangaugeLoading/LanguageLoading'
import { useLanguage } from '../LanguageProvider/Dev/useLanguage'
import { CandidateRoute } from './CandidateRoute'
import { EmployerRoute } from './EmployerRoute'
import  {PublicRoute}  from './PublicRoute'
const AppRouter = () => {
    useLanguage()
    const auth = useAuth()
    const AppRoute = () => {
        switch (auth.user) {
            case 'candidate':return <CandidateRoute/>
            case 'employer': return <EmployerRoute/>
            default: return <PublicRoute/>
        }
    }
    return (
        <Box position={'relative'}>
            <LanguageLoading/>
           <AppRoute/>
        </Box>
    )
}
export default AppRouter