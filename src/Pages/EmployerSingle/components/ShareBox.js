import { Grid } from '@material-ui/core'
import React from 'react'
import { LineAwesome, SvgFacebook, SvgGoogle, SvgMapMarkedAltSolid, SvgPaperPlane, SvgTwitter } from 'react-line-awesome-svg'
import { Jh_Button } from '../../../components/Jh_Button'

export const ShareBox = () => {
    return (
        <Grid item m={2} xs={12} md={2}>
        <Grid container spacing={1}>
        <Grid  item xs={4} md={4}><Jh_Button href="#"  icon={<LineAwesome icon={SvgGoogle}/>} color="secondary"/></Grid>
        <Grid  item xs={4} md={4}><Jh_Button href="#"  icon={<LineAwesome icon={SvgFacebook}/>} color="primary"/></Grid>
        <Grid  item xs={4} md={4}><Jh_Button href="#"  icon={<LineAwesome icon={SvgTwitter}/>} color="warning"/></Grid>
        <Grid  item xs={6} md={12}><Jh_Button href="#" variant="contained" text="See On Map" icon={<LineAwesome icon={SvgMapMarkedAltSolid}/>} color="secondary"/></Grid>
        <Grid  item xs={6} md={12}><Jh_Button href="#" variant="contained" text="Follow us" icon={<LineAwesome icon={SvgPaperPlane}/>} color="primary"/></Grid>
        </Grid>
    </Grid>
    )
}
