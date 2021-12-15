import { Box, ThemeProvider,createTheme } from '@material-ui/core'
import React from 'react'
import { UserAvatar } from '../../../../UserAvatar'
import Jh_CandidateDrawer from './components/CandidateDrawer'
import { CandidateInterest } from './components/CandidateInterest'
export const CandiadateExtention = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <ThemeProvider theme={() => createTheme({typography:{fontFamily:'QUICKSAND'}}) } >
          <CandidateInterest/>
          <UserAvatar src="https://creativelayers.net/themes/jobhunt-html/images/resource/es1.jpg" size="medium" name="ali tofan"/> 
          <Jh_CandidateDrawer/>  
          </ThemeProvider>
        </Box>
    )
}
