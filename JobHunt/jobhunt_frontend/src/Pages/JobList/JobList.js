import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import { Jh_ContentHeader } from '../../components/Jh_ContentHeader'
import { Jh_SearchKeyword } from '../../components/Jh_SearchKeyword'
import { Jh_SelectLocation } from '../../components/Jh_SelectLocation'

export const JobList = () => {
    return (
        <Box>
            <Jh_ContentHeader image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg" text="Job List" />
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <Jh_SearchKeyword/>
                        <Jh_SelectLocation/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
