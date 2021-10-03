import { Box, Container, Divider, Grid } from '@material-ui/core'
import React from 'react'
import CandidatesDashboardBackground from '../../asset/backgrounds/CandidatesDashboardBackground.jpg'
import { Jh_ContentHeader } from '../../components/Jh_ContentHeader'
import { Jh_EmployerMenu } from '../../components/Jh_EmployerMenu'
import { Jh_SectionHeader } from '../../components/Jh_SectionHeader'
import { ManageJobsSection } from './components/ManageJobsSection'

const EmployerManageJobs = () => {
    return (
        <Box>
            <Jh_ContentHeader image={CandidatesDashboardBackground} text="Welcome Tara Planer" />
            <Container maxWidth="lg">
                <Grid container >
                    <Grid item xs={12} md={3}>
                        <Jh_EmployerMenu />
                    </Grid>
                    <Divider light orientation="vertical" flexItem />
                    <Grid item xs={12} md={8}>
                        <ManageJobsSection
                            jobPosted={9}
                            application={20}
                            activeJobs={18}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default EmployerManageJobs