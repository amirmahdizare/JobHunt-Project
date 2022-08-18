import { Box, Button, Grid, TextareaAutosize, TextField, Typography } from '@material-ui/core'
import React from 'react'

export const KeepInTouch = () => {
    return (
        <Grid item xs={12} md={5}>
            <Box my={4}>
                <Typography variant="h6" gutterBottom>Keep In Touch</Typography>
                <TextField
                    variant="outlined"
                    label="FullName"
                    fullWidth
                    margin="normal" />
                <TextField
                    variant="outlined"
                    label="Email"
                    fullWidth
                    margin="normal" />
                <TextField
                    variant="outlined"
                    label="Subject"
                    fullWidth
                    margin="normal" />
                <TextField
                    variant="outlined"
                    fullWidth
                    label="massage"
                    multiline
                    margin="normal"
                    rows={4} />
                <Button size="large" variant="contained" color="secondary" fullWidth>Send</Button>
            </Box>
        </Grid>
    )
}
