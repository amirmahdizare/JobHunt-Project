import { Box } from '@material-ui/core'
import React from 'react'
import { Jh_DesktopBaseHeader } from '../components/Jh_DesktopBaseHeader/Jh_DesktopBaseHeader'
import Jh_Footer from '../components/Jh_Footer/Jh_Footer'
import { Jh_MobileViewHeader } from '../components/JH_MobileViewHeader/Jh_MobileViewHeader'
import { Jh_EmployerHeaderExtension } from './components/Jh_EmployerHeaderExtension/Jh_EmployerHeaderExtension'
export const Jh_EmployerLayout = (props) => {
    return (
        <Box>
           <Jh_DesktopBaseHeader extension={<Jh_EmployerHeaderExtension/>}/>
           <Jh_MobileViewHeader />
           {props.children}
           <Jh_Footer/> 
        </Box>
    )
}
