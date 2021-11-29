import { Button, makeStyles, Typography, Box } from '@material-ui/core'
import React from 'react'
import { LineAwesome, SvgClock, SvgFile, SvgUsersSolid } from 'react-line-awesome-svg'
import { SectionHeader } from '../../../components/SectionHeader'
import { JobsTable } from './JobsTable'
const useStyles = makeStyles(theme => ({
    buttonContainer: {
        border: '2px solid #e8ecec',
        borderRadius: theme.spacing(1),
        display: 'flex', 
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            marginLeft:'unset'
        },
        justifyContent: 'space-around',
        marginBottom: theme.spacing(2),
       
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
            <SectionHeader title="Manage Jobs" />
            <Box pl={2}>
                <Box className={classes.buttonContainer}>
                    <Button><LineAwesome className={classes.icon} icon={SvgClock} /><Typography>&nbsp;  </Typography><Typography color="textSecondary">&nbsp;Job Posted</Typography> </Button>
                    <Button><LineAwesome className={classes.icon} icon={SvgFile} /><Typography>&nbsp; </Typography><Typography color="textSecondary">&nbsp;Job Application</Typography></Button>
                    <Button><LineAwesome className={classes.icon} icon={SvgUsersSolid} /><Typography>&nbsp; </Typography><Typography color="textSecondary">&nbsp;Active Jobs</Typography></Button>
                </Box>
                <JobsTable />
            </Box>
        </Box>
    )
}
