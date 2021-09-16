import { Box, Container, Divider, Grid } from '@material-ui/core'
import React from 'react'
import { Jh_JobSingleHeader } from '../../components/Jh_JobSingleHeader'
import { JobInfo } from './components/JobInfo'

export const JobSingle = () => {
    return (
        <Box>
            <Jh_JobSingleHeader
                image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg"
                jobTitle="Senior Web Designer"
                workTime="PART TIME"
                location="Ajax, Ontario"
                datePosted="Posted 4 years ago" />
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <JobInfo
                        companyName="Tix Dog"
                        companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/sj.png"
                        location="274 Seven Sisters Road, London, N4 2HY"
                        website="www.jobhunt.com"
                        phoneNumber="+90 538 963 54 87"
                        emailAddress="ali.tufan@jobhunt.com"
                        />
                        <Divider light />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    </Grid>
                </Grid>
            </Container>



        </Box>
    )
}
