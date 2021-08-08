import { Box } from '@material-ui/core'
import React from 'react'
import { appstore } from '../../asset/index'
const DownloadFromAppStore = () => {
    return (
        <Box p={1} >
            <img src={appstore} style={{ cursor: 'pointer' }} />
        </Box>
    )
}
export { DownloadFromAppStore }