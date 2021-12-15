import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import lines from '../asset/backgrounds/lines.png'
import { Jh_WorkTime } from './Jh_WorkTime'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { useGetSpecificCorporation } from '../hooks/useGetSpecificCorporation'
const useClasses = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        backgroundImage: (props) => (`url(${props.image})`),
        backgroundSize: 'cover',
        color: 'white',
        display: 'flex',
        height: '400px',
        justifyContent: 'center',
        padding: theme.spacing(5),
        position: 'relative',
        textAlign: 'center',
        wordBreak: 'break-word',
        [theme.breakpoints.up('md')]: {
            alignItems: 'flex-end',
        },
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
            flexDirection: 'column'
        },
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
export const Jh_JobSingleHeader = (props) => {
    const { jobTitle, workTime, location, datePosted } = props
    const classes = useClasses(props);
    return (
        <Box className={classes.root} >
            <Box my={2} position="relative" flexDirection="inherit">
                <Typography variant="h3">{jobTitle}</Typography>
                <Box my={4} display='flex' justifyContent="center" flexWrap="wrap" flexDirection="inherit">
                    <Jh_WorkTime style={{borderColor:'inherit',color:'inherit',borderRadius:'24px'}}   workTime={workTime} />
                    &nbsp;
                    <Button color="inherit" startIcon={<LocationOnOutlinedIcon />}><Typography>{location}</Typography></Button>
                    &nbsp;
                    <Button color="inherit" startIcon={<DateRangeIcon />}><Typography>{datePosted}</Typography></Button>
                </Box>
            </Box>
        </Box>
    )
}
