import React from 'react'
import { Box } from '@material-ui/core'
import {DownloadFromAppStore  ,DownloadFromGooglePlay} from '../../../DownloadFromIcons/index'
const DownloadBox = () => {
    return (
        <Box display="flex" flexDirection='column' justifyContent="center" alignItems="center" >
            <DownloadFromAppStore/>
            <DownloadFromGooglePlay/>
        </Box>
    )
}
export {DownloadBox}