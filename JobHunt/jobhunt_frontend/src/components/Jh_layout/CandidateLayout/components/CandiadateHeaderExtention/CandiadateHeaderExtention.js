import { Box, ThemeProvider,createTheme } from '@material-ui/core'
import React from 'react'
import CandidateDrawer from './components/CandidateDrawer'
// import { CandidateInterest } from './components/CandidateInterest'
export const CandiadateHeaderExtention = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <ThemeProvider theme={() => createTheme({typography:{fontFamily:'QUICKSAND'}}) } >
          {/* <CandidateInterest/> */}
          <CandidateDrawer/>  
          </ThemeProvider>
        </Box>
    )
}
