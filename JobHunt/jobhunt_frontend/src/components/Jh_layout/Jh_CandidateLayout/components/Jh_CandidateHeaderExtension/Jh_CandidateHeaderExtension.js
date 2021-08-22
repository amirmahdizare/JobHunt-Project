import { Box, ThemeProvider,createTheme } from '@material-ui/core'
import React from 'react'
import { Jh_Avatar } from '../../../../Jh_Avatar'
import Jh_CandidateDrawer from './components/Jh_CandidateDrawer'
import { Jh_CandidateInterest } from './components/Jh_CandidateInterest'
export const Jh_CandidateHeaderExtension = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <ThemeProvider theme={() => createTheme({typography:{fontFamily:'QUICKSAND'}}) } >
          <Jh_CandidateInterest/>
          <Jh_Avatar src="https://creativelayers.net/themes/jobhunt-html/images/resource/es1.jpg" size="medium" name="ali tofan"/> 
          <Jh_CandidateDrawer/>  
          </ThemeProvider>
        </Box>
    )
}
