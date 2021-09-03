import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export const LeaveAReply = () => {
    return (
        <Box my={3} >
            <Typography variant="h6">Leave A Reply</Typography>
            <br/>
            <Grid container  spacing={3} >
                <Grid item  xs={12} md={8}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={5}
                        variant="outlined" fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                <TextField
                        id="outlined-multiline-static"
                        label="Email"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                <TextField
                        id="outlined-multiline-static"
                        label="Phone"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={8}  justifyContent="center"> 
                    <Button color="secondary" fullWidth size="large" variant="contained" ><Typography>Send Reply</Typography></Button>
                </Grid>
            </Grid>

        </Box>
    )
}
