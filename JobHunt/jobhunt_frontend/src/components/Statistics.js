import { Box, Container,Grid,makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyles=makeStyles(theme=>({
    box:{
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
    },
    number:{
        color:theme.palette.success.main
    }
}))
export const Statistics = () => {
    const classes=useStyles()
    return (
        <Box my={6}>
            <Container maxWidth="lg">
                <Grid container  spacing={2}>
                    <Grid item className={classes.box}  xs={6} md={3}><Typography className={classes.number} variant="h2">18</Typography><Typography>Jobs Posted</Typography></Grid>
                    <Grid item className={classes.box}  xs={6} md={3}><Typography className={classes.number} variant="h2">38</Typography><Typography>Jobs Filled</Typography></Grid>
                    <Grid item className={classes.box}  xs={6} md={3}><Typography className={classes.number} variant="h2">67</Typography><Typography>Companies</Typography></Grid>
                    <Grid item className={classes.box}  xs={6} md={3}><Typography className={classes.number} variant="h2">92</Typography><Typography>Members</Typography></Grid>
                </Grid>
            </Container>
            
        </Box>
    )
}
