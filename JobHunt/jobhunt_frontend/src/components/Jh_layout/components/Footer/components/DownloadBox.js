import React from 'react'
import { Box, Grid } from '@material-ui/core'
import {Jh_GetFromGooglePlay  ,Jh_GetFromAppStore} from '../../../../Jh_getTheApp/index'
const DownloadBox = () => {
    return (
        <Grid item xs={12} md={3}>
        <Box display="flex" p={2} flexDirection='column' justifyContent="center" alignItems="center" >
            <Jh_GetFromAppStore/>
            <Jh_GetFromGooglePlay/>
        </Box>
        </Grid>
    )
}
export {DownloadBox}