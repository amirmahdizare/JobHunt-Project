import React from 'react'
import { googleplay } from '../../asset'
import { Box } from '@material-ui/core'
const DownloadFromGooglePlay = () => {
    return (
        <Box p={1} >
            <img src={googleplay} style={{ cursor: 'pointer' }} />
        </Box>
    )
}
export { DownloadFromGooglePlay }