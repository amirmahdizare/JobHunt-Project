import React from 'react'
import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core'
import { SkillsPercentage } from './components/SkillsPercentage'
import { Education } from './components/Education/Education'
import { WorkExperience } from './components/WorkExperience/WorkExperience'
import { Portfolio } from './components/Portfolio/Portfolio'
import { ProfessionalSkills } from './components/ProfessionalSkills/ProfessionalSkills'
import { CertificatesSection } from './components/CertificatesSection/CertificatesSection'
import { CandidateMenu } from '../../../../components/CandidateMenu'
import { UserAvatar } from '../../../../components/UserAvatar'
const useClasses = makeStyles((theme) => ({
	browseBtn: {
		borderRadius: theme.spacing(2),
		width: '110px',
	},
}))
export const Content = () => {
	const classes = useClasses()
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
						<Typography variant='h5'>My Profile</Typography>
					</Box>
					<Box
						style={{ padding: '10px' }}
						direction='row'
						justifyContent='space-around'
						alignItems='center'
						display='flex'
					>
						<UserAvatar
							src='https://creativelayers.net/themes/jobhunt-html/images/resource/es1.jpg'
							size='big'
							name='ali tofan'
						/>
						<Box
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
							height={'80px'}
						>
							<Button
								className={classes.browseBtn}
								style={{
									borderColor: '#3f51b5',
									color: '#3f51b5',
								}}
								variant='outlined'
							>
								Browse
							</Button>
							<Typography
								variant='subtitle2'
								color='textSecondary'
								gutterBottom
							>
								Max file size is 1MB, Minimum dimension: 270*210 And Suitable
								files are .jpg& .png
							</Typography>
						</Box>
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
