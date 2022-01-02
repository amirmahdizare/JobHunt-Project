import { Box, Button, Card, CardActionArea, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import { React, useState } from 'react'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Skeleton } from '@material-ui/lab';
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
const JobCardSkeleton = ({key,hideDetail}) => {
    const classes = useClasses()



    return (
        <Card className={classes.root} key={key}>
            <CardActionArea className={classes.content}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={hideDetail ? 4 : 1} className={classes.companyLogoContainer}>
                        <Skeleton variant='rectngle' width={'3.5rem'} height={'3.5rem'} />
                    </Grid>
                    <Grid item xs={12} sm={hideDetail ? 8 : 5} >
                        <Skeleton variant='text' />
                        <Skeleton variant='text' />
                        <Skeleton variant='text' />
                        <Skeleton variant='text' />

                    </Grid>

                    <Grid item xs={12} sm={3} className={classes.locationContainer} >
                        <Skeleton variant='text' width={'100%'}/>

                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.itemContainer}>
                            <Skeleton variant='text' width={'100%'} />
                            <Skeleton variant='text' width={'100%'} />
                    </Grid>


                </Grid>
            </CardActionArea>
        </Card>
    )
}
export default JobCardSkeleton