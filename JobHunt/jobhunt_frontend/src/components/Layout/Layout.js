import React from 'react'
import { DesktopHeader } from './Header/DesktopView/DesktopHeader'
import { MobileHeader } from './Header/MobileView/MobileHeader'
import Footer from './Footer/Footer'
import { HomePage } from '../../Pages/HomePage/HomePage.js'
import { Box } from '@material-ui/core'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createTheme({
    typography: {
        fontFamily: 'Open Sans',
    }
});
theme = responsiveFontSizes(theme);
const Layout = () => {
    return (
        <Box style={{ boxSizing: 'border-box' }}>
            <ThemeProvider theme={theme}>
            <DesktopHeader />
            <MobileHeader />
            <HomePage />
            <Footer />
            </ThemeProvider>
        </Box>
    )
}
export { Layout }