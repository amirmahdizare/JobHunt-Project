import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export const AboutBusiness = ({ description, name }) => {
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>About {name}</Typography>

            <Typography  dangerouslySetInnerHTML={{ __html: description }}
            color="textSecondary" component="p" variant="body2" gutterBottom />


        </Grid>
    )
}
