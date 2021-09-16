import { Box, Typography,makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles=makeStyles(theme=>({
    map:{
        border:'none',
        height:'280px',
        width:'100%',
    }
}))
export const JobLocation = () => {
    const classes=useStyles()
    return (
        <Box my={2} >
            <Typography variant="h6" gutterBottom>Job Location</Typography>
            <iframe className={classes.map}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d926917.0482572999!2d-104.57738594649922!3d40.26036964524562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2s!4v1513784737244"></iframe>
        </Box>
    )
}
