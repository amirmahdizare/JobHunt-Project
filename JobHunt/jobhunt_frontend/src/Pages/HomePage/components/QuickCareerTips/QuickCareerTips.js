import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Tip from './components/Tip'
const useClasses = makeStyles((theme) => ({
    root: {
        backgroundImage: 'url(https://creativelayers.net/themes/jobhunt-html/images/resource/parallax3.jpg)'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    tipContainer: {
        margin: theme.spacing(4)
    }
}))
const QuickCareerTips = () => {
    const classes = useClasses()
    return (
        <Box className={classes.root} width="100%">
            <Container className={classes.container} maxWidth="lg" >
                <Box mt={5} textAlign="center">
                    <Typography variant="h3">Quick Career Tips</Typography>
                    <Typography variant="h6" color="textSecondary">Found by employers communicate directly with hiring managers and recruiters.</Typography>
                </Box>
                <Grid className={classes.tipContainer} container spacing={2}>
                    <Tip
                        date="March 29, 2017"
                        description="A job is a regular activity performed in exchange becoming an employee, volunteering" 
                        image="https://creativelayers.net/themes/jobhunt-html/images/resource/b1.jpg"
                        numberOfComments={0}
                        title="Attract More Attention Sales And Profits"
                        />
                    <Tip
                        description="A job is a regular activity performed in exchange becoming an employee, volunteering" 
                        date="March 29, 2017"
                        image="https://creativelayers.net/themes/jobhunt-html/images/resource/b2.jpg"
                        numberOfComments={0}
                        title="11 Tips to Help You Get New Clients"
                    />
                    <Tip
                        date="March 29, 2017"
                        description="A job is a regular activity performed in exchange becoming an employee, volunteering" 
                        image="https://creativelayers.net/themes/jobhunt-html/images/resource/b3.jpg"
                        numberOfComments={0}
                        title="An Overworked Newspaper Editor"
                    />
                </Grid>

            </Container>

        </Box>
    )
}
export { QuickCareerTips }