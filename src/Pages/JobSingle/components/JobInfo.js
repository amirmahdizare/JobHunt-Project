import React from 'react'
import {
    Box, Button, CardMedia,
    Typography, makeStyles, Grid
} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LinkIcon from '@material-ui/icons/Link';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const useStyles = makeStyles(theme => ({
    root: {
        boxSizing:'border-box',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '& .MuiButton-root': {
            cursor: 'unset',
            textAlign:'left',
            textTransform: 'none',
            '&:hover': {
                background: 'none'
            }
        }
    },
    companyLogo: {
        border: '2px solid #e2e2e2',
        borderRadius: theme.spacing(1),
    }
}))
export const JobInfo = (props) => {
    const {companyName,companyLogo,location,website,phoneNumber,emailAddress} = props
    const classes = useStyles()
    return (
        <Grid item xs={12} md={10}>

        <Grid container spacing={2} className={classes.root} alignItems="center" >
            <Grid item xs={3} md={2} mr={2} >
                <CardMedia
                    className={classes.companyLogo}
                    src={companyLogo}
                    component="img"
                    height="100px" />
            </Grid>
            <Grid item xs={9} md={10}>
                <Typography variant="h5" >{companyName}</Typography>
                <Button disableRipple startIcon={<LocationOnOutlinedIcon color="action"/>}> <Typography color="textSecondary" >{location}</Typography></Button>
                <Box display="flex" flexWrap="wrap"  >
                    <Button disableRipple startIcon={<LinkIcon color="action"/>}> <Typography  variant="body2" color="textSecondary">{website}</Typography></Button>
                    <Button disableRipple startIcon={<PhoneIcon color="action"/>} ><Typography variant="body2" color="textSecondary">{phoneNumber}</Typography></Button>
                    <Button disableRipple startIcon={<MailOutlineIcon color="action"/>} ><Typography variant="body2"  color="textSecondary">{emailAddress}</Typography></Button>
                </Box>
            </Grid>
        </Grid>
        </Grid>
    )
}
