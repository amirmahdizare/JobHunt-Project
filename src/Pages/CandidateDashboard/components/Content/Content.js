import React from 'react'
import { Box, Container, Divider, Grid ,makeStyles, Typography} from '@material-ui/core'
import { SkillsPercentage } from './components/SkillsPercentage'
import { Education } from './components/Education/Education'
import { WorkExperience } from './components/WorkExperience/WorkExperience'
import { Portfolio } from './components/Portfolio/Portfolio'
import { ProfessionalSkills } from './components/ProfessionalSkills/ProfessionalSkills'
import { CertificatesSection } from './components/CertificatesSection/CertificatesSection'
import { Jh_CandidateMenu } from '../../../../components/Jh_CandidateMenu'
export const Content = () => {
    return (
        <Container>
                <Grid container direction="row">
                    <Grid item xs={12} lg={3}>
                        <Jh_CandidateMenu/>
                        <Divider light/>
                        <SkillsPercentage/>
                    </Grid>
                    <Divider orientation="vertical" flexItem/>
                    <Grid item xs={12} lg={8}>
                        <Box p={1}><Typography variant="h4" color="primary">Candidate Dashboard</Typography></Box>
                        <Divider light/>
                        <Education/>
                        <WorkExperience/>
                        <Portfolio/>
                        <ProfessionalSkills/>
                        <CertificatesSection/>
                    </Grid>
                </Grid>


            </Container>
    )
}
