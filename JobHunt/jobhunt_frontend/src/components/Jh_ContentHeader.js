import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import CandidatesDashboardBackground from '../asset/backgrounds/CandidatesDashboardBackground.jpg'
import lines from '../asset/backgrounds/lines.png'
const useClasses = makeStyles((theme) => ({
    root: {
        alignItems: 'flex-end',
        backgroundImage:(props) =>  (`url(${props.image})`),
        backgroundSize: 'cover',
        color: 'white',
        display: 'flex',
        height: '300px',
        [theme.breakpoints.down('sm')]:{
            height: '100px'
        },
        justifyContent: 'center',
        padding: theme.spacing(5),
        position: 'relative',
        '&:before': {
            background: 'linear-gradient(45deg, rgb(139, 145, 221) 0%, rgb(16, 25, 93) 71% , rgb(16, 25, 93) 100%)',
            position: 'absolute',
            content: "''",
            height: '100%',
            left: '0',
            opacity: '0.8',
            top: '0',
            width: '100%',
            zIndex: '0'
        },
        '&:after': {
            backgroundImage: `url(${lines})`,
            content: '""',
            position: 'absolute',
            left: '0',
            height: '100%',
            top: '0',
            opacity: '0.14',
            width: '100%',
            zIndex: '0',
        }
    }
}))
export const Jh_ContentHeader = (props) => {
    const classes = useClasses(props)
    return (
        <Box className={classes.root} >
            <Box position="relative">
                <Typography variant="h3">{props.text}</Typography>
            </Box>
        </Box>
    )
}
