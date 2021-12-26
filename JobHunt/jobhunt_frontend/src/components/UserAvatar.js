import React from 'react'
import { Avatar, makeStyles } from '@material-ui/core'
const useClasses = makeStyles((props) => ({
	avatar: {
		border: '2px solid white',
		boxShadow: '0px 0px 10px rgba(0, 0 ,0, 0.1);',
		width: (props) => {
			switch (props.size) {
				case 'medium':
					return '40px'
				case 'large':
					return '100px'
				case 'big':
					return '150px'
				default:
					return '20px'
			}
		},
		height: (props) => {
			switch (props.size) {
				case 'medium':
					return '40px'
				case 'large':
					return '100px'
				case 'big':
					return '150px'
				default:
					return '20px'
			}
		},
	},
}))
export const UserAvatar = (props) => {
	const classes = useClasses(props)
	return (
		<>
			<Avatar alt={props.name} className={classes.avatar} src={props.src} />
		</>
	)
}
