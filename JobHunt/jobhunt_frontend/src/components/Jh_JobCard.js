import { Box, Button, Card, CardActionArea, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import { React, useState } from 'react'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const useClasses = makeStyles(theme => ({
    root: {
        boxSizing: 'border-box',
        borderLeft: '2px solid transparent',
        borderRadius: 'unset',
        boxShadow: 'unset',
        margin: theme.spacing(0.1),
        textAlign: 'left',
        transition: 'all .2s ease',
        verticalAlign: 'middle',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        },
        '& .MuiCardActionArea-focusHighlight': {
            background: 'white'
        },
        '&:hover': {
            borderLeftWidth: '2px',
            borderLeftStyle: 'solid',
            borderColor: theme.palette.primary.light,
            backgroundColor: 'white !important',
            boxShadow: '0px 0px 25px rgba(0,0,0 , 0.15)',
        }
    },
    companyLogo: {
        height: '56px',
        width: '96px',
    },
    companyLogoContainer: {

        display: 'flex',
        justifyContent: 'center'
    },
    companyName: {
        color: theme.palette.secondary.main,
    },
    content: {
        padding: theme.spacing(2),
    },
    itemContainer: {
        alignItems: 'center',
        color: 'gray',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: "center",
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
    },
    jobTitle: {
        fontWeight: '600'
    },
    locationContainer: {
        alignItems: 'center',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
    },
    icon: {
        marginRight: '20px'
    },
    workTime: {
        borderRadius: theme.spacing(2),
        borderWidth: '1px',
    }

}))
const Jh_JobCard = (props) => {
    const [like, setLike] = useState(false)
    const classes = useClasses()
    const { workTimeColor } = props
    const makeWorkTimestatus = (color) => ({ color: color, borderColor: color })


    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.content}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={props.hideDetail ? 4 : 1} className={classes.companyLogoContainer}>

                        <CardMedia
                            className={classes.companyLogo}
                            image={props.companyLogo}
                        />
                    </Grid>
                    <Grid item xs={12} sm={props.hideDetail ? 8 : 5} >
                        <Typography className={classes.jobTitle} variant="body1" component="b">{props.jobTitle}</Typography>
                        <Typography className={classes.companyName} variant="body2">{props.companyName}</Typography>

                    </Grid>
                    {!props.hideDetail ?
                        <>
                            <Grid item xs={12} sm={3} className={classes.locationContainer} >
                                <LocationOnOutlinedIcon className={classes.icon} />
                                <Typography variant="body2" >{props.companyLocation} </Typography>

                            </Grid>
                            <Grid item xs={12} sm={3} className={classes.itemContainer}>
                                <FavoriteBorderIcon className={classes.icon} style={{ color: !like ? 'gray' : 'red' }} onClick={() => setLike(!like)} />
                                <Box>
                                    <Button className={classes.workTime} style={makeWorkTimestatus(workTimeColor)} variant="outlined">{props.workTime} </Button>
                                    <Typography display="block" variant="body2" color="textSecondary">{props.registeredDate}</Typography>
                                </Box>
                            </Grid>
                        </>
                        : undefined}
                </Grid>
            </CardActionArea>
        </Card>
    )
}
export default Jh_JobCard