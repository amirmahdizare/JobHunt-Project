import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import {
	LineAwesome,
	SvgFile,
	SvgBriefcaseSolid,
	SvgMoneyBillSolid,
	SvgPaperPlane,
	SvgUser,
	SvgFlaskSolid,
	SvgUnlinkSolid,
} from 'react-line-awesome-svg'
import { Link } from 'react-router-dom'
const useClasses = makeStyles((theme) => ({
	root: {
		backgroundColor: 'unset',
		borderRadius: 'unset',
		boxSizing: 'border-box',
		color: theme.palette.grey[600],
		justifyContent: 'flex-start',
		textTransform: 'none',
		'& $startIcon': {
			fill: theme.palette.grey[600],
		},
		width: '100%',
		'&:hover': {
			color: theme.palette.primary.main,
			'& $startIcon': {
				fill: theme.palette.primary.main,
			},
		},
	},
	label: {
		padding: '3px',
	},

	startIcon: {},
}))
export const CandidateMenu = () => {
	const classes = useClasses()
	const buttonClasses = {
		root: classes.root,
		label: classes.label,
		startIcon: classes.startIcon,
	}
	return (
		<Box my={1}>
			<Button
				classes={buttonClasses}
				size='large'
				color='primary'
				startIcon={<LineAwesome icon={SvgFile} />}
			>
				<Link
					style={{ textDecoration: 'none', color: 'inherit' }}
					to='/dashboard/profile'
				>
					<Typography>My Profile</Typography>
				</Link>
			</Button>
			<Button
				classes={buttonClasses}
				size='large'
				startIcon={<LineAwesome icon={SvgBriefcaseSolid} />}
			>
				<Typography>My Resume</Typography>
			</Button>
			<Button
				classes={buttonClasses}
				size='large'
				startIcon={<LineAwesome icon={SvgMoneyBillSolid} />}
			>
				<Typography>Shortlisted Job</Typography>
			</Button>
			<Button
				classes={buttonClasses}
				size='large'
				startIcon={<LineAwesome icon={SvgPaperPlane} />}
			>
				<Typography>Applied Job</Typography>
			</Button>
			<Button
				classes={buttonClasses}
				size='large'
				startIcon={<LineAwesome icon={SvgUser} />}
			>
				<Typography>Job Alert</Typography>
			</Button>
			<Button
				classes={buttonClasses}
				size='large'
				startIcon={<LineAwesome icon={SvgFile} />}
			>
				<Typography>Cv & Cover Letter</Typography>
			</Button>
			<Button
				classes={buttonClasses}
				size='large'
				startIcon={<LineAwesome icon={SvgFlaskSolid} />}
			>
				<Typography>Change Password</Typography>
			</Button>
			<Button
				classes={buttonClasses}
				size='large'
				startIcon={<LineAwesome icon={SvgUnlinkSolid} />}
			>
				<Typography>Logout</Typography>
			</Button>
		</Box>
	)
}
