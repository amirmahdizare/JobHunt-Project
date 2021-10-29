import { Box, Container, Divider, Grid } from '@material-ui/core'
import React from 'react'
import CandidatesDashboardBackground from '../../asset/backgrounds/CandidatesDashboardBackground.jpg'
import { ContentHeader } from '../../components/ContentHeader'
import { EmployerMenu } from '../../components/EmployerMenu'
import { SectionHeader } from '../../components/SectionHeader'
import { ManageJobsSection } from './components/ManageJobsSection'

const EmployerManageJobs = () => {
    return (
        <Box>
            <ContentHeader image={CandidatesDashboardBackground} text="Welcome Tara Planer" />
            <Container maxWidth="lg">
                <Grid container >
                    <Grid item xs={12} md={3}>
                        <EmployerMenu />
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