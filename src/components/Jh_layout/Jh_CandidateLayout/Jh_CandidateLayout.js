import React from 'react'
// import { DesktopHeader } from '../components/Header/DesktopView/DesktopHeader'
// import { MobileHeader } from '../components/Header/MobileView/MobileHeader'
// import Footer from '../components/Footer/Footer'
import { Jh_MobileViewHeader } from '../components/JH_MobileViewHeader/Jh_MobileViewHeader';
import Jh_Footer from '../../Jh_layout/components/Jh_Footer/Jh_Footer'
import { Box } from '@material-ui/core'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import {Jh_DesktopBaseHeader} from '../components/Jh_DesktopBaseHeader/Jh_DesktopBaseHeader'
import {Jh_CandidateHeaderExtension} from '../Jh_CandidateLayout/components/Jh_CandidateHeaderExtension/Jh_CandidateHeaderExtension'
let theme = createTheme({
    typography: {
        fontFamily: 'Quicksand',
    }
});
theme = responsiveFontSizes(theme);
const Jh_CandidateLayout = (props) => {
    return (
        <Box >
            <ThemeProvider theme={theme}>
            <Jh_DesktopBaseHeader extension={<Jh_CandidateHeaderExtension/>}/>
            <Jh_MobileViewHeader/>
            {/* <DesktopHeader /> */}
            {/* <MobileHeader /> */}
            {props.children}
            {/* <HomePage /> */}
            <Jh_Footer/>
            {/* <Footer /> */}
            </ThemeProvider>
        </Box>
    )
}
export { Jh_CandidateLayout }