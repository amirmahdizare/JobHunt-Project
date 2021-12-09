import { Box, CircularProgress, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useStatistics } from '../hooks/useStatistics'
const useStyles = makeStyles(theme => ({
    box: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    number: {
        color: theme.palette.success.main
    }
}))
export const Statistics = () => {
    const classes = useStyles()
    const { jobsCount, companiesCount, usersCount, loading } = useStatistics()
    const dataStatus = jobsCount && companiesCount  && usersCount
    return (
        <Box my={6}>
            <Container maxWidth="lg">

                {loading && <Box display="flex" alignItems="center" justifyContent="center"><CircularProgress/></Box>}
                <Grid container spacing={2}>

                {dataStatus
                && 
                <> <Grid item className={classes.box} xs={6} md={4}><Typography className={classes.number} variant="h2">{jobsCount}</Typography><Typography>Jobs Posted</Typography></Grid>
                {/* <Grid item className={classes.box}  xs={6} md={3}><Typography className={classes.number} variant="h2">38</Typography><Typography>Jobs Filled</Typography></Grid> */}
                <Grid item className={classes.box} xs={6} md={4}><Typography className={classes.number} variant="h2">{companiesCount}</Typography><Typography>Companies</Typography></Grid>
                <Grid item className={classes.box} xs={6} md={4}><Typography className={classes.number} variant="h2">{usersCount}</Typography><Typography>Members</Typography></Grid>
                </>}

                {!dataStatus && !loading && <Typography>No Data Found</Typography>}
                </Grid>
                
                </Container>

        </Box>
    )
}
