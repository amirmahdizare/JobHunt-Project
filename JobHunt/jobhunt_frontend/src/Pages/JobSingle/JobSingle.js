import { Box, Container, Divider, Grid } from '@material-ui/core'
import React from 'react'
import { Jh_JobSingleHeader } from '../../components/Jh_JobSingleHeader'
import { Jh_Share } from '../../components/Jh_Share'
import { JobDetailContainer } from './components/JobDetailContainer'
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
                        <JobDetailContainer 
                        title="Job Description"
                        text={[
                            "Company is a 2016 Iowa City-born start-up that develops consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti",
                            "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien"
                        ]}/>
                        <JobDetailContainer
                        title="Required Knowledge, Skills, and Abilitie"
                        items={[
                            'Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS)',
                            'Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred concepting)',
                            'Cross-browser and platform testing as standard practice',
                            'Experience using Invision a plus',
                            'Experience in video production a plus or, at a minimum, a willingness to learn'
                        ]}/>
                        <JobDetailContainer 
                        title="Education + Experience"
                        items={[
                            'Advanced degree or equivalent experience in graphic and web design',
                            '3 or more years of professional design experience',
                            'Direct response email experience',
                            'Ecommerce website design experience',
                            'Familiarity with mobile and web apps preferred',
                            'Excellent communication skills, most notably a demonstrated ability to solicit and address creative and design feedback',
                            'Must be able to work under pressure and meet deadlines while maintaining a positive attitude and providing exemplary customer service',
                            'Ability to work independently and to carry out assignments to completion within parameters of instructions given, prescribed routines, and standard accepted practices'
                        ]}/>
                        <Divider light/>
                        <Box width={1/4} my={2}>
                        <Jh_Share/>
                        </Box>
                        <Divider light/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    </Grid>
                </Grid>
            </Container>



        </Box>
    )
}
