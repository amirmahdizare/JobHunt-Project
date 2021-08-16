import React from 'react'
import { Box, Grid } from '@material-ui/core'
import {DownloadFromAppStore  ,DownloadFromGooglePlay} from '../../../DownloadFromIcons/index'
const DownloadBox = () => {
    return (
        <Grid item xs={12} md={3}>
        <Box display="flex" p={2} flexDirection='column' justifyContent="center" alignItems="center" >
            <DownloadFromAppStore/>
            <DownloadFromGooglePlay/>
        </Box>
        </Grid>
    )
}
export {DownloadBox}