import React from 'react'

import { Box, Grid, LinearProgress, Typography } from '@material-ui/core'

export const NumberOfEmployers = ({number_of_entities,loading}) => {
    return (
            <Grid item xs={12} sm={loading ? 12 : 7}>
                {loading && <Box my={2}><LinearProgress /></Box>}
                {!loading && !!number_of_entities && <Typography>Total of {number_of_entities} Employer</Typography>}
                {!loading && number_of_entities==0 && <Typography>There is no employer with this information </Typography>}
            </Grid>
    )
}
