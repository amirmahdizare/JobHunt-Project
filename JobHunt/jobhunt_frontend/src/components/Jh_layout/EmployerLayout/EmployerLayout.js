import { Box, createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { DesktopBaseHeader } from '../components/DesktopBaseHeader/DesktopBaseHeader'
import Footer from '../components/Footer/Footer'
import { MobileViewHeader } from '../components/MobileViewHeader/MobileViewHeader'
import { EmployerHeaderExtension } from './components/EmployerHeaderExtension/EmployerHeaderExtension'
let theme = createTheme({
    typography: {
        fontFamily: 'Quicksand',
    }
});
theme = responsiveFontSizes(theme);

export const EmployerLayout = (props) => {
    return (
        <Box>
            <ThemeProvider theme={theme}>
           <DesktopBaseHeader extension={<EmployerHeaderExtension/>}/>
           <MobileViewHeader />
           {props.children}
           <Footer/> 
           </ThemeProvider>
        </Box>
    )
}
