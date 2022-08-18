import React from 'react'
import { Jh_MobileViewHeader } from '../components/JH_MobileViewHeader/Jh_MobileViewHeader';
import Jh_Footer from '../components/Jh_Footer/Jh_Footer'
// import { HomePage } from '../../Pages/HomePage/HomePage.js'
import { Box } from '@material-ui/core'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import {Jh_DesktopBaseHeader} from '../components/Jh_DesktopBaseHeader/Jh_DesktopBaseHeader'
import {HeaderButtons} from './components/HeaderButtons'
let theme = createTheme({
    typography: {
        fontFamily: 'Quicksand',
    }
});
theme = responsiveFontSizes(theme);
const Jh_MainLayout = (props) => {
    return (
        <Box >
            <ThemeProvider theme={theme}>
            <Jh_DesktopBaseHeader extension={<HeaderButtons/>}/>
            <Jh_MobileViewHeader/>
            {props.children}
            <Jh_Footer />
            </ThemeProvider>
        </Box>
    )
}
export { Jh_MainLayout }