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
        boxSizing: 'border-box',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '& .MuiButton-root': {
            cursor: 'unset',
            textAlign: 'left',
            textTransform: 'none',
            '&:hover': {
                background: 'none'
            }
        }
    },
    companyLogo: {
        border: '2px solid #e2e2e2',
        borderRadius: theme.spacing(1),
        objectFit: 'contain'
    },
    companyInfo: {
        display: 'flex',
        marginLeft: 15,
        textDecoration: 'none',
    },
    companyInfoTxt: {
        marginLeft: 5,
        '&:hover': {
            color: '#1D96F6'
        }
    }
}))
export const JobInfo = (props) => {
    const { companyName, companyLogo, location, website, phoneNumber, emailAddress } = props
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
                    <Button disableRipple startIcon={<LocationOnOutlinedIcon color="action" />}> <Typography color="textSecondary" >{location}</Typography></Button>
                    <Box display="flex" flexWrap="wrap"  >
                        <a className={classes.companyInfo} href={`http://${website}}`}><LinkIcon color="action" /> <Typography className={classes.companyInfoTxt} variant="body2" color="textSecondary">{website}</Typography></a>
                        <a className={classes.companyInfo} href={`tel:${phoneNumber}`} ><PhoneIcon color="action" /><Typography className={classes.companyInfoTxt} variant="body2" color="textSecondary">{phoneNumber}</Typography></a>
                        <a className={classes.companyInfo} href={`mailto:${emailAddress}`} ><MailOutlineIcon color="action" /><Typography className={classes.companyInfoTxt} variant="body2" color="textSecondary">{emailAddress}</Typography></a>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}
