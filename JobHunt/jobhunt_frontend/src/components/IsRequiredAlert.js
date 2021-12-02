import { Box, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'

export const IsRequiredAlert = ({ field }) => {
    return (
        <Box width={1} my={1}>
            <Alert severity="error" variant="filled"   >
                <Typography>The {field} is required</Typography>
            </Alert>
        </Box>
    )
}
