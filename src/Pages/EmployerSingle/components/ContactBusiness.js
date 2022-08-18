import { Box, Typography, makeStyles, TextField, Grid, Button } from '@material-ui/core'
import React from 'react'
import { Jh_Button } from '../../../components/Jh_Button'
const useStyles = makeStyles(theme => ({
    contactBox: {
        alignItems:'center',
        border: '2px solid #e2e2e2',
        borderRadius: theme.spacing(1),
        display:'flex',
        padding: theme.spacing(2),
        flexDirection:'column',
    }
}))
export const ContactBusiness = () => {
    const classes = useStyles()
    return (
        <Grid item xs={12} md={4}>
            <Typography variant="h6">Contact Business Network</Typography>
            <Box mx={1} my={2} className={classes.contactBox}>
                <TextField
                    required
                    id="outlined-required"
                    label="Enter Your Name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email Address"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-required"
                    label="Phone Number"
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Massage"
                    multiline
                    placeholder="Massage Should have more than 50 characters"
                    rows={4}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <Jh_Button variant="contained" color="primary" ><Typography variant="h6">Send Email</Typography></Jh_Button>
            </Box>

        </Grid>
    )
}
