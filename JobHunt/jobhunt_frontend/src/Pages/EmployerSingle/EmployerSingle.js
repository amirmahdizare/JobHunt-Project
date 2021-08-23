import { Box, Container, Divider, Grid } from '@material-ui/core'
import { Facebook, Twitter } from '@material-ui/icons'
import React from 'react'
import { LineAwesome, SvgFacebook, SvgGoogle, SvgMapMarkedAltSolid, SvgPaperPlane, SvgTwitter } from 'react-line-awesome-svg'
import { Jh_ContentHeader } from '../../components/Jh_ContentHeader'
import { Jh_Button } from '../../components/Jh_Button'
import { EmployerInfo } from './components/EmployerInfo'
import { ShareBox } from './components/ShareBox'
export const EmployerSingle = () => {
    return (
        <Box >
            <Jh_ContentHeader image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg" text="Single Employer" />
            <Container maxWidth="lg">
                <Grid container style={{ marginTop: '16px' }} alignItems="center" >
                    <EmployerInfo
                        name="Tera Planner"
                        location="Sacramento, California"
                        workTime="FULL TIME"
                        applications={1}
                        postDate="July 29, 2017"
                        views="868"
                    />
                    <ShareBox />
                </Grid>
                <Divider light />
            </Container>
        </Box>
    )
}
