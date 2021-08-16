import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { ListMenu } from './ListMenu'
import { Typography } from '@material-ui/core'
const FindJobs = () => {
    return (
        <Grid item  xs={12} md={3} >
        <Box p={2}>
            <Typography variant="h5" style={{ color: 'white' }}>
                Find Jobs
            </Typography>
            <ListMenu
                menuItems={[
                    { name: 'US Jobs', href: '#' },
                    { name: 'Canada Jobs', href: '#' },
                    { name: 'UK Jobs', href: '#' },
                    { name: 'Emplois en Fnce', href: '#' },
                    { name: 'Join in Deuts', href: '#' },
                    { name: 'Vacatures China', href: '#' }
                ]}
            />
        </Box>
        </Grid>
    )
}
export { FindJobs }