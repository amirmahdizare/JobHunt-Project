import { Box, CircularProgress } from '@material-ui/core'
import React from 'react'

export const Loading = () => {
    return (
        <Box mt={6} width="100%" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress/>
        </Box>
    )
}
