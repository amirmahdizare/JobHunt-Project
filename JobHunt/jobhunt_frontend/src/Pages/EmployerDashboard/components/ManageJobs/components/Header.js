import { Box, Button, CircularProgress, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useCompanyStatistics } from '../../../../../hooks/useCompanyStatistics'
import { LineAwesome, SvgClock, SvgFile, SvgUsersSolid } from 'react-line-awesome-svg'

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        border: '2px solid #e8ecec',
        borderRadius: theme.spacing(1),
        display: 'flex',
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            marginLeft: 'unset'
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
export const Header = () => {
    const { jobPosted, activeJobs, loading } = useCompanyStatistics()
    const classes = useStyles()

    return (
        <Box className={classes.buttonContainer}>
            {!loading ? <Button>
                <LineAwesome className={classes.icon} icon={SvgClock} />
                <Typography>&nbsp; {jobPosted} </Typography>
                <Typography color="textSecondary">&nbsp;Job Posted</Typography> </Button>
                : <CircularProgress style={{ width: '2rem', height: '2rem' }} />}
            {/* <Button><LineAwesome className={classes.icon} icon={SvgFile} /><Typography>&nbsp; {props.application} </Typography><Typography color="textSecondary">&nbsp;Job Application</Typography></Button> */}
            {!loading
                ? <Button>
                    <LineAwesome className={classes.icon} icon={SvgUsersSolid} />
                    <Typography>&nbsp; {activeJobs}</Typography>
                    <Typography color="textSecondary">&nbsp;Active Jobs</Typography>
                </Button>
                : <CircularProgress style={{ width: '2rem', height: '2rem' }} />
            }
        </Box>
    )
}
