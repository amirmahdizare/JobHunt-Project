import { Box, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'

export const ItemNotSet = ({ item, clickToAdd }) => {
    return (
        <Box width={1} >
            <Alert severity="warning" variant="standard" >
                <Typography variant="inherit">
                    {item} is not set {clickToAdd && 'click edit to add'}
                </Typography>
            </Alert>
        </Box>
    )
}
