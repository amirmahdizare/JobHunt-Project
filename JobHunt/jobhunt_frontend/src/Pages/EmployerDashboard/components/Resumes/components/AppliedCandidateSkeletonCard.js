import { Box, Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import React from 'react'

export const AppliedCandidateSkeletonCard = () => {
    return (
        <Box w={1} p={2} >
            <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center', height: '100%' }}>

                <Grid item xs={2} style={{ display: 'flex' }} justifyContent='center'>
                    <Skeleton variant='circle' height={'5rem'} width={'5rem'} />
                </Grid>
                
                <Grid item xs={10} md={4} >
                    <Skeleton variant='text' />
                    <Skeleton variant='text' />
                    <Skeleton variant='text' />
                </Grid>

                <Grid item xs={6} md={3} >
                    <Skeleton variant='text' />

                </Grid>

                <Grid item xs={6} md={3}>
                    <Skeleton variant='text' />
                </Grid>

            </Grid>
        </Box>
    )
}
