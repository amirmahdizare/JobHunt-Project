import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export const AboutBusiness = (props) => {
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>About Business Network</Typography>
            {props.description.map(p=>(
                <Typography color="textSecondary" component="p" variant="body2" gutterBottom >{p}</Typography>
            ))}
            
        </Grid>
    )
}
