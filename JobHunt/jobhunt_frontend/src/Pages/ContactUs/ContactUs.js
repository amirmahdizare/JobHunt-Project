import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import { Jh_HomePagesHeader } from '../../components/Jh_HomePagesHeader'
import { JobHuntOffice } from './components/JobHuntOffice'
import { KeepInTouch } from './components/KeepInTouch'

const ContactUs = () => {
    return (
        <Box>
            <Jh_HomePagesHeader page="Contact" description="Keep up to date with the latest news"/>
            <Container maxWidth="lg" >
            <Grid container spacing={4}>
                <KeepInTouch/>
                <JobHuntOffice/>
            </Grid>
            </Container>
        </Box>
    )
}
export default ContactUs