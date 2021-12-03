import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { ListMenu } from './ListMenu'
import { Typography } from '@material-ui/core'
const FindJobs = () => {
    return (
        <Grid item xs={12} md={3} >
            <Box p={2}>
                <Typography variant="h5" style={{ color: 'white' }}>
                    Find Jobs
                </Typography>
                <ListMenu
                    menuItems={[
                        { name: 'Beijing Jobs', href: '#' },
                        { name: 'Shanghai Jobs', href: '#' },
                        { name: 'Shenzhen Jobs', href: '#' },
                        { name: 'Guangzhou Jobs', href: '#' },
                        { name: 'Online or Freelancer', href: '#' },
                        { name: 'jobhunt Academy', href: '#' }
                    ]}
                />
            </Box>
        </Grid>
    )
}
export { FindJobs }
