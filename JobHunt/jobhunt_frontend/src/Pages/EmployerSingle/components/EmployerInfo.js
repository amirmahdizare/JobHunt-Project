import React from 'react'
import {
    Box, Button, CardMedia,
    Typography, makeStyles, Grid
} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { LineAwesome, SvgCalendar, SvgEye, SvgFileAlt, SvgThemeisle } from 'react-line-awesome-svg';
import { Jh_WorkTime } from '../../../components/Jh_WorkTime';
import { noImageEmployer } from '../../../asset';
const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('md')]:
            { margin: theme.spacing(2), },
        '& .MuiButton-root': {
            cursor: 'unset',
            textTransform: 'none',
            '&:hover': {
                background: 'none'
            }
        }
    },
    icon: {
        fill: theme.palette.primary.light,
        verticalAlign: 'middle',
        fontSize: theme.typography.h5.fontSize,
    },
    employerLogo: {
        border: '2px solid #e2e2e2',
        borderRadius: theme.spacing(1),
    }
}))
export const EmployerInfo = (props) => {
    const classes = useStyles()
    const fileIcon = <LineAwesome className={classes.icon} icon={SvgFileAlt} />
    const calendarIcon = <LineAwesome className={classes.icon} icon={SvgCalendar} />
    const viewIcon = <LineAwesome className={classes.icon} icon={SvgEye} />
    const {logo} = props
    return (
        <Grid item xs={12} md={10}>

        <Grid container spacing={2} className={classes.root} alignItems="center" >
            <Grid item xs={4} md={2} mr={2} >
                <CardMedia
                    className={classes.employerLogo}
                    src={logo || noImageEmployer}
                    component="img"
                    height="140px" />
            </Grid>
            <Grid item xs={12} md={10}>
                <Typography variant="h4" gutterBottom>{props.name}</Typography>
                <Button disableRipple> <Typography color="textSecondary" >{<LocationOnOutlinedIcon className={classes.icon} style={{ verticalAlign: 'middle' }} />}&nbsp;{props.location}</Typography></Button>
                {/* <Jh_WorkTime workTime={props.workTime} /> */}
                <Box mt={1}>
                    {/* <Button disableRipple> <Typography color="textSecondary">{fileIcon}&nbsp;Applications&nbsp;{props.applications}</Typography></Button>
                    <Button disableRipple ><Typography color="textSecondary">{calendarIcon}&nbsp;Post Date:&nbsp;{props.postDate}</Typography></Button>
                    <Button disableRipple ><Typography color="textSecondary">{viewIcon}&nbsp;Views&nbsp;{props.views}</Typography></Button> */}

                </Box>
            </Grid>
        </Grid>
        </Grid>
    )
}
