import { Box, Container, Grid, Typography, makeStyles } from '@material-ui/core'
import Company from './components/Company.js'
import React from 'react'
const useClasses = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: theme.spacing(1),
    }
}))
const Supporters = () => {
    const classes = useClasses()
    return (
        <Box>
            <Container maxWidth="lg" className={classes.root}>
                <Box m={4} textAlign="center">
                    <Typography variant="h3">Companies We've Helped</Typography>
                    <Typography variant="h6" color="textSecondary">What other people thought about the service provided by JobHunt</Typography>
                </Box>
                <Grid container className={classes.container} spacing={2}>
                    <Company logo="https://creativelayers.net/themes/jobhunt-html/images/resource/cc1.jpg" />
                    <Company logo="https://creativelayers.net/themes/jobhunt-html/images/resource/cc2.jpg" />
                    <Company logo="https://creativelayers.net/themes/jobhunt-html/images/resource/cc3.jpg" />
                    <Company logo="https://creativelayers.net/themes/jobhunt-html/images/resource/cc4.jpg" />
                    <Company logo="https://creativelayers.net/themes/jobhunt-html/images/resource/cc5.jpg" />
                </Grid>

            </Container>

        </Box>
    )
}
export { Supporters }