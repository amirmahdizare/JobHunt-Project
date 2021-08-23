import { Button, Paper, makeStyles, Typography, Box } from '@material-ui/core'
import React from 'react'
import ScheduleIcon from '@material-ui/icons/Schedule';
import { LineAwesome, SvgClock, SvgFile, SvgUser, SvgUsersSolid } from 'react-line-awesome-svg'
import { Jh_SectionHeader } from '../../../components/Jh_SectionHeader'
import { JobsTable } from './JobsTable'
const useStyles = makeStyles(theme => ({
    buttonContainer: {
        border: '2px solid #e8ecec',
        borderRadius: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        '& .MuiButton-root': {
            textTransform: 'none',
        },
    },
    icon: {
        fontSize: theme.typography.h4.fontSize,
        fill: theme.palette.primary.light
    }
}))
export const ManageJobsSection = (props) => {
    const classes = useStyles()
    return (
        <Box >
            <Jh_SectionHeader title="Manage Jobs" />
            <Box pl={2}>
                <Box className={classes.buttonContainer}>
                    <Button><LineAwesome className={classes.icon} icon={SvgClock} /><Typography>&nbsp; {props.jobPosted} </Typography><Typography color="textSecondary">&nbsp;Job Posted</Typography> </Button>
                    <Button><LineAwesome className={classes.icon} icon={SvgFile} /><Typography>&nbsp; {props.application} </Typography><Typography color="textSecondary">&nbsp;Job Application</Typography></Button>
                    <Button><LineAwesome className={classes.icon} icon={SvgUsersSolid} /><Typography>&nbsp; {props.activeJobs}</Typography><Typography color="textSecondary">&nbsp;Active Jobs</Typography></Button>
                </Box>
                <JobsTable />
            </Box>
        </Box>
    )
}
