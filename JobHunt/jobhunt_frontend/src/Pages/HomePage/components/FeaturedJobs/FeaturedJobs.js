import React from 'react'
import { Box,Button, Container, Typography, makeStyles } from '@material-ui/core'
import JobsContainer from './components/JobsContainer'
const useClasses = makeStyles(theme => ({
    root: {
        position: 'relative',
        textAlign: 'center',
    }
    ,
    button: {
        borderRadius: theme.spacing(1),
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(5),
        padding: theme.spacing(1.5),
        textTransform: 'none',
        transition: 'all .4s ease',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            border: '2px solid',
            borderColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
        }
    }
    ,
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        width: '100%',
    }
}))
const FeaturedJobs = () => {
    const classes = useClasses()
    return (
        <Box width="100%" className={classes.root}>
            <Container maxWidth="lg" className={classes.container}>
                <Box marginTop={6}>
                    <Typography variant="h4">Featured Jobs</Typography>
                    <Typography >Leading Employers already using job and talent.</Typography>
                </Box>
                <JobsContainer />
                <Button href="/jobs"  className={classes.button} color="secondary" variant="outlined"><Typography variant="h6" style={{fontSize:'16px'}} >Load more Jobs</Typography></Button>
            </Container>
        </Box>
    )
}
export default FeaturedJobs