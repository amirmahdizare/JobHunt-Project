import { Box, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Jh_Button } from '../../../components/Jh_Button'
import { LineAwesome, SvgHeart, SvgLinkedinIn, SvgPaperPlane } from 'react-line-awesome-svg';
export const ApplyBox = () => {
    const [shortList,toggleShortList] =useState(false)
    return (
        <Box my={2}>
            <Grid container spacing={1}>
                <Grid item xs={12}><Jh_Button startIcon={<LineAwesome fontSize="inherit" icon={SvgPaperPlane}/>} color="primary">Apply for Job</Jh_Button></Grid>
                <Grid item xs={6}> <Jh_Button startIcon={<LineAwesome icon={SvgLinkedinIn}/>}color="warning"><Typography>Apply with Linkedin</Typography></Jh_Button></Grid>
                <Grid item  xs={6}><Jh_Button startIcon={<LineAwesome icon={SvgHeart}/>} color="secondary" onClick={()=> toggleShortList(!shortList)} variant={shortList? 'contained' :' outlined'}><Typography>{shortList ? 'Short Listed' : 'Add to Short List'}</Typography></Jh_Button></Grid>
            </Grid> 
        </Box>
    )
}
