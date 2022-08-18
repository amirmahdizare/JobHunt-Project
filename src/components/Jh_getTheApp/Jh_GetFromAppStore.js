import { Box } from '@material-ui/core'
import React from 'react'
import { appstore } from '../../asset/index'
const Jh_GetFromAppStore = () => {
    return (
        <Box p={1} >
            <img src={appstore} style={{ cursor: 'pointer' }} />
        </Box>
    )
}
export { Jh_GetFromAppStore }