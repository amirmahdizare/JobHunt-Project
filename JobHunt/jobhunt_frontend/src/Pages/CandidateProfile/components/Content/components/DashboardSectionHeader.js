import { Box, Button, Divider, Grid, Typography } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import React from 'react'

export const DashboardSectionHeader = (props) => {
    return (
        <>
            <Box p={2}  width="100" alignItems="center" justifyContent="space-between" display="flex" flexDirection="row">
                <Typography variant="h5">{props.title}</Typography>
                <Button
                    onClick={props.addItemCallback}
                    color="secondary"
                    startIcon={<AddCircle fontSize="large" />}
                    style={{ textTransform: 'none' }}
                >
                    <Typography variant="body1" color="secondary">Add&nbsp;{props.itemToAdd}</Typography>
                </Button>

            </Box>
            <Divider light />
        </>
    )
}
