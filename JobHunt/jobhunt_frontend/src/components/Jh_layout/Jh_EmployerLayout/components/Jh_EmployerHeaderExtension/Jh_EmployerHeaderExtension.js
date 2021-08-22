import React from 'react'
import {Jh_Avatar} from '../../../../Jh_Avatar'
import { Jh_PopperMenu } from './components/Jh_PopperMenu'
import { Jh_EmployerMenu } from '../../../../Jh_EmployerMenu'
import { Box, ThemeProvider ,createTheme } from '@material-ui/core'
export const Jh_EmployerHeaderExtension = () => {
    return (
          <ThemeProvider theme={() => createTheme({typography:{fontFamily:'QUICKSAND'}}) } >
        <Box display="flex" alignItems="center">

            <Jh_Avatar src="https://creativelayers.net/themes/jobhunt-html/images/resource/profile.jpg" size="medium" name="Tera Planer" />
            <Jh_PopperMenu employerName="Tara Planer" />
        </Box>
            </ThemeProvider>
    )
}
