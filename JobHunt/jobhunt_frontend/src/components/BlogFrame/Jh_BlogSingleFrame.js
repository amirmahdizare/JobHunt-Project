import {
	Box,
	CircularProgress,
	Container,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core'
import React from 'react'
import { getBlogs } from '../../api/public'
import { useGetData } from '../../hooks/useGetData'
import { ContentHeader } from '../ContentHeader'
import { RecentPosts } from './components/RecentPosts.js/RecentPosts'
const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiButton-root': {
			textTransform: 'none',
		},
	},
	container: {
		marginTop: theme.spacing(4),
	},
}))
export const Jh_BlogSingleFrame = (props) => {
	const classes = useStyles()
	// // const { posts, loading, error } = props
	const [data, error, loading] = useGetData(getBlogs)
	const { posts } = data || []
	const recentPosts = posts ? posts.slice(0, 3) : []

	return (
		<Box className={classes.root}>
			<ContentHeader
				image='https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg'
				text='Blog'
			/>
			<Container maxWidth='lg' className={classes.container}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={9}>
						{props.children}
					</Grid>
					<Grid item xs={12} sm={3}>
						<RecentPosts posts={recentPosts} />
						<Box
							width={1}
							display='flex'
							alignItems='center'
							justifyContent='center'
						>
							{posts?.length == 0 && <Typography>No Found posts</Typography>}
							{!posts && loading && <CircularProgress />}
							{error && <Typography>Error</Typography>}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}
