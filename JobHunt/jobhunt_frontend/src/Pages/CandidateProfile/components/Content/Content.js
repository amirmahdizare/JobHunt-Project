import {
	Box,
	Button,
	Container,
	Divider,
	FormControl,
	Grid,
	IconButton,
	InputBase,
	InputLabel,
	makeStyles,
	MenuItem,
	Select,
	TextareaAutosize,
	Typography,
} from '@material-ui/core'
import React from 'react'
import { CandidateMenu } from '../../../../components/CandidateMenu'
import { Jh_Card } from '../../../../components/Jh_Card'
import { UserAvatar } from '../../../../components/UserAvatar'
import { SkillsPercentage } from './components/SkillsPercentage'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
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
				<Grid item xs={12} lg={8} style={{ padding: '10px 20px' }}>
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
								files are .jpg & .png
							</Typography>
						</Box>
					</Box>
					<Grid container spacing='2' style={{ padding: '10px' }}>
						<Grid
							lg={6}
							item
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Full Name</p>
							<Jh_Card>
								<InputBase
									style={{ minHeight: '3.1876em' }}
									inputProps={{ 'aria-label': 'Select Location' }}
									fullWidth
									id='name'
									labelWidth={70}
								/>
							</Jh_Card>
						</Grid>
						<Grid
							item
							lg={6}
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Job Title</p>
							<Jh_Card>
								<InputBase
									style={{ minHeight: '3.1876em' }}
									fullWidth
									width='full'
									id='job-title'
									labelWidth={70}
								/>
							</Jh_Card>
						</Grid>
					</Grid>
					<Box display='flex' flexDirection='column' padding={'10px'}>
						<p>Description</p>
						<TextareaAutosize
							style={{
								borderColor: '#e2e2e2',
								color: 'rgba(0, 0, 0, 0.54)',
								borderRadius: '5px',
								borderWidth: '2px',
								padding: '25px',
								lineHeight: '1.1rem',
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
							ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in
							faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum
							primis in faucibus. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames
							ac ante ipsum primis in faucibus.
						</TextareaAutosize>
					</Box>
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Button
							className={classes.browseBtn}
							style={{
								borderColor: '#f50057',
								color: 'black',
								borderRadius: '8px',
							}}
							variant='outlined'
						>
							Update
						</Button>
					</div>
					<Typography variant='h5'>Social Edit</Typography>
					<Divider light />
					<Grid container spacing='2' style={{ padding: '10px' }}>
						<Grid
							lg={6}
							item
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Facebook</p>
							<Jh_Card>
								<InputBase
									style={{ flex: 1 }}
									placeholder='www.facebook.com/saeed.eyvazy'
								/>
								<IconButton
									disableFocusRipple
									type='submit'
									aria-label='search'
								>
									<FacebookIcon color='primary' />
								</IconButton>
							</Jh_Card>
						</Grid>
						<Grid
							item
							lg={6}
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Twitter</p>
							<Jh_Card>
								<InputBase
									style={{ flex: 1 }}
									placeholder='www.twitter.com/saeed.eyvazy'
								/>
								<IconButton
									disableFocusRipple
									type='submit'
									aria-label='search'
								>
									<TwitterIcon color='primary' />
								</IconButton>
							</Jh_Card>
						</Grid>
						<Grid
							item
							lg={6}
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Google</p>
							<Jh_Card>
								<InputBase
									style={{ flex: 1 }}
									placeholder='www.google.com/saeed.eyvazy'
								/>
								<IconButton
									disableFocusRipple
									type='submit'
									aria-label='search'
								>
									<LinkedinIcon color='primary' />
								</IconButton>
							</Jh_Card>
						</Grid>
						<Grid
							item
							lg={6}
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Linkedin</p>
							<Jh_Card>
								<InputBase
									style={{ flex: 1 }}
									placeholder='www.linkedin.com/saeed.eyvazy'
								/>
								<IconButton
									disableFocusRipple
									type='submit'
									aria-label='search'
								>
									<LinkedinIcon color='primary' />
								</IconButton>
							</Jh_Card>
						</Grid>
					</Grid>
					<Typography variant='h5'>Contact</Typography>
					<Divider light />
					<Grid container spacing='2' style={{ padding: '10px' }}>
						<Grid
							lg={4}
							item
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Phone number</p>
							<Jh_Card>
								<InputBase
									inputProps={{ 'aria-label': 'Select Location' }}
									fullWidth
									id='name'
									labelWidth={70}
									style={{ minHeight: '3.1876em' }}
								/>
							</Jh_Card>
						</Grid>
						<Grid
							lg={4}
							item
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Email</p>
							<Jh_Card>
								<InputBase
									style={{ minHeight: '3.1876em' }}
									inputProps={{ 'aria-label': 'Select Location' }}
									fullWidth
									id='name'
									labelWidth={70}
								/>
							</Jh_Card>
						</Grid>
						<Grid
							lg={4}
							item
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Website</p>
							<Jh_Card>
								<InputBase
									style={{ minHeight: '3.1876em' }}
									inputProps={{ 'aria-label': 'Select Location' }}
									fullWidth
									id='name'
									labelWidth={70}
								/>
							</Jh_Card>
						</Grid>
						<Grid
							lg={6}
							item
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Country</p>
							<FormControl fullWidth variant='outlined'>
								<InputLabel id='demo-simple-select-outlined-label'>
									China
								</InputLabel>
								<Select
									labelId='select-country-outlined-label'
									id='demo-simple-select-outlined'
									label='Country'
								>
									<MenuItem value=''>china</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid
							lg={6}
							item
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>City</p>
							<FormControl fullWidth variant='outlined'>
								<Select
									labelId='select-country-outlined-label'
									id='demo-simple-select-outlined'
									label='Country'
								>
									<MenuItem value=''>chuango</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid
							lg={6}
							item
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Find On Map</p>
							<Jh_Card>
								<InputBase
									inputProps={{ 'aria-label': 'Select Location' }}
									fullWidth
									style={{ minHeight: '3.1876em' }}
									id='name'
									labelWidth={70}
								/>
							</Jh_Card>
						</Grid>
						<Grid
							lg={3}
							item
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Latitude</p>
							<Jh_Card>
								<InputBase
									style={{ minHeight: '3.1876em' }}
									inputProps={{ 'aria-label': 'Select Location' }}
									fullWidth
									id='name'
									labelWidth={70}
								/>
							</Jh_Card>
						</Grid>
						<Grid
							lg={3}
							item
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Longtiude</p>
							<Jh_Card>
								<InputBase
									style={{ minHeight: '3.1876em' }}
									inputProps={{ 'aria-label': 'Select Location' }}
									fullWidth
									id='name'
									labelWidth={70}
								/>
							</Jh_Card>
						</Grid>
					</Grid>
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Button
							className={classes.browseBtn}
							style={{
								borderColor: '#f50057',
								color: 'black',
								borderRadius: '8px',
							}}
							variant='outlined'
						>
							Update
						</Button>
					</div>
				</Grid>
			</Grid>
		</Container>
	)
}
