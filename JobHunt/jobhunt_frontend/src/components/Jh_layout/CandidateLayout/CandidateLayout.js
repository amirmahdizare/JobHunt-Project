import React from 'react'
import { MobileViewHeader} from '../components/MobileViewHeader/MobileViewHeader';
import Footer from '../components/Footer/Footer'
import { Box } from '@material-ui/core'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import {DesktopBaseHeader} from '../components/DesktopBaseHeader/DesktopBaseHeader'
import { AddResume } from './components/AddResume/AddResume';
import { CandiadateHeaderExtention } from './components/CandiadateHeaderExtention/CandiadateHeaderExtention';
let theme = createTheme({
    typography: {
        fontFamily: 'Quicksand',
    }
});
theme = responsiveFontSizes(theme);
const CandidateLayout = (props) => {
    return (
        <Box >
            <ThemeProvider theme={theme}>
            <DesktopBaseHeader 
            userExtension={<CandiadateHeaderExtention/>} 
            addItem ={<AddResume/>}/>
            <MobileViewHeader/>
            {props.children}
            <Footer/>
            </ThemeProvider>
        </Box>
    )
}
export { CandidateLayout }