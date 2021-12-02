import React from 'react'
import { MobileViewHeader } from '../components/MobileViewHeader/MobileViewHeader';
import Footer from '../components/Footer/Footer'
import { Box } from '@material-ui/core'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import {DesktopBaseHeader} from '../components/DesktopBaseHeader/DesktopBaseHeader'
import {HeaderButtons} from './components/HeaderButtons'
let theme = createTheme({
    typography: {
        fontFamily: 'Quicksand',
    }
});
theme = responsiveFontSizes(theme);
const MainLayout = (props) => {
    return (
        <Box >
            <ThemeProvider theme={theme}>
            <DesktopBaseHeader extension={<HeaderButtons/>}/>
            <MobileViewHeader/>
            {props.children}
            <Footer />
            </ThemeProvider>
        </Box>
    )
}
export { MainLayout }