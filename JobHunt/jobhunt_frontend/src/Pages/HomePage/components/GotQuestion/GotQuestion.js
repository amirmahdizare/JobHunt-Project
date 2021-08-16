import { Box, Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
const useClasses = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        transition:'all 0.4s ease',
        textAlign:'center',
        padding:theme.spacing(5),
        color:'white',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        }
    },
}))
const GotQuestion = () => {
    const classes=useClasses()
    return (
        <Box className={classes.root}>
            <Container maxWidth="lg">
                <Typography variant="h3">Gat a question?</Typography>
                <Typography variant="h6">We're here to help. Check out our FAQs, send us an email or call us at 1 (800) 555-5555</Typography>
            </Container>

        </Box>
    )
}
export  {GotQuestion}