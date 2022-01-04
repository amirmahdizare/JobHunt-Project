import { Box, Container, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { CandidateMenu } from '../../../../components/CandidateMenu'
import { CertificatesSection } from './components/CertificatesSection/CertificatesSection'
import { Education } from './components/Education/Education'
import { Portfolio } from './components/Portfolio/Portfolio'
import { ProfessionalSkills } from './components/ProfessionalSkills/ProfessionalSkills'
import { SkillsPercentage } from './components/SkillsPercentage'
import { WorkExperience } from './components/WorkExperience/WorkExperience'

export const Content = () => {
	return (
		<Container>
			<Grid container direction='row'>
				<Grid item xs={12} lg={3}>
					<CandidateMenu />
					<Divider light />
					<SkillsPercentage />
				</Grid>
				<Divider orientation='vertical' flexItem />
				<Grid item xs={12} lg={8}>
					<Box p={1}>
						<Typography variant='h4' color='primary'>
							Candidate Dashboard
						</Typography>
					</Box>
					<Divider light />
					<Education />
					<WorkExperience />
					<Portfolio />
					<ProfessionalSkills />
					<CertificatesSection />
				</Grid>
			</Grid>
		</Container>
	)
}
