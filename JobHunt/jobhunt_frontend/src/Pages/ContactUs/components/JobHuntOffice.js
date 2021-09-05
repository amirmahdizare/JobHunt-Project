import React from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { Map } from '@material-ui/icons'
import DirectionsIcon from '@material-ui/icons/Directions';
import { SvgEnvelope, SvgFaxSolid,  SvgMapMarkedAltSolid, SvgPhoneAltSolid } from 'react-line-awesome-svg'
import { ContactItem } from './ContactItem'

export const JobHuntOffice = () => {
    return (
        <Grid item xs={12} md={7}>
            <Box my={4}>
                <Typography variant="h6" gutterBottom>JobHuntOffice</Typography>
                <ContactItem iconName={SvgMapMarkedAltSolid} detail="	Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan, New York 10282" />
                <ContactItem iconName={SvgPhoneAltSolid} detail="Call Us : 0934 343 343" />
                <ContactItem iconName={SvgFaxSolid} detail="Fax : 0934 343 343" />
                <ContactItem iconName={SvgEnvelope} detail="Email : info@jobhunt.com" />
                <Grid container spacing={2}>
                <Grid item xs={6} ><Button startIcon={<Map/>} size="large" fullWidth   variant="contained" color="primary">See On Map</Button></Grid>
                <Grid item xs={6}><Button startIcon ={<DirectionsIcon/>} size="large" fullWidth variant="outlined" color="primary">Direction</Button></Grid>
            </Grid>
            </Box>
        </Grid>
    )
}
