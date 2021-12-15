import React from 'react'
import { PopperMenu } from './components/PopperMenu'
import { Box, ThemeProvider, createTheme} from '@material-ui/core'
export const EmployerHeaderExtension = () => {
    return (
        <ThemeProvider theme={() => createTheme({ typography: { fontFamily: 'QUICKSAND' } })} >
            <Box display="flex" alignItems="center">
                <PopperMenu employerName="Tara Planer" />
            </Box>
        </ThemeProvider>
    )
}
