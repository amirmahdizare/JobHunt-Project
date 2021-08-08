import { Box } from '@material-ui/core'
import React from 'react'
import { ListMenu } from './ListMenu'
import { Typography } from '@material-ui/core'
const FindJobs = () => {
    return (
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
    )
}
export { FindJobs }