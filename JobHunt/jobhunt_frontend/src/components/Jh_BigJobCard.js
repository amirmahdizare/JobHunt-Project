import { React, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const useClasses = makeStyles(theme => ({
    root: {
        borderColor:theme.palette.grey[100],
        borderRadius:'unset',
        borderTop:'1px solid ',
        boxSizing: 'border-box',
        boxShadow: 'unset',
        textAlign: 'left',
        transition: 'all .2s ease',
        position:'relative',
        verticalAlign: 'middle',
        width: '100%',
        zIndex:0,
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        },
        '& .MuiCardActionArea-focusHighlight': {
            background: 'white'
        },
        '&:hover': {
            borderColor:'transaprent',
            boxShadow: '0px 0px 30px rgba(0,0,0 , 0.1)',
            zIndex:'100',
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
        paddingTop:theme.spacing(4.5),
        paddingBottom:theme.spacing(4.5),
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
const Jh_BigJobCard = (props) => {
    const [like, setLike] = useState(false)
    const classes = useClasses()
    const makeWorkTimestatus = () => {
        switch (props.workTime) {
            case 'FULL TIME':
                return { color: '#8b91dd', borderColor: '#8b91dd' }
            case 'PART TIME':
                return { color: '#7dc246', borderColor: '#7dc246' }
            case 'FREELANCE':
                return { color: '#fb236a', borderColor: '#fb236a' }
            case 'TEMPORARY':
                return { color: '#7dc246', borderColor: '#7dc246' }
            default:
                return;
        }
    }
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.content}>
                <Grid container >
                    <Grid item xs={12} sm={props.hideDetail ? 4 : 2} className={classes.companyLogoContainer}>

                        <CardMedia
                            className={classes.companyLogo}
                            image={props.companyLogo}
                        />
                    </Grid>
                    <Grid item xs={12} sm={props.hideDetail ? 8 : 4} >
                        <Typography className={classes.jobTitle} variant="body1" component="b">{props.jobTitle}</Typography>
                        <Typography className={classes.companyName} color="primary" variant="body1">{props.companyName}</Typography>

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
                                    <Button className={classes.workTime} style={makeWorkTimestatus()} variant="outlined">{props.workTime} </Button>
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
export default Jh_BigJobCard