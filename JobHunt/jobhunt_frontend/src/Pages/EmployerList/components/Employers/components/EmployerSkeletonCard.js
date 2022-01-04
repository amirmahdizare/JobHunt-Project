import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Skeleton } from '@material-ui/lab';
const useClasses = makeStyles(theme => ({

    cardRoot: {
        boxShadow: 'unset',
        border: '2px solid transparent',
        '&:hover': {
            backgroundColor: 'unset',
            border: '2px solid #e2e2e2'
        }
    },
    actionArea: {
        padding: theme.spacing(2),
    },
    openPosition: {
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            right: '10px'
        }
    },
    cardMedia: {
        width: '80px',
        height: '80px',
        borderRadius: theme.spacing(0.5),
        border: '1px solid #e2e2e2',
        float: 'right'
    },
    alignItemsinXs: {
        [theme.breakpoints.only('xs')]:
            { display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }
    },
    imageBox: {
        display:'flex',
        alignItems:'center',
        [theme.breakpoints.only('xs')]:
            { display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }
   
    }
}))
export const EmployerSkeletonCard = ({key}) => {
    const classes = useClasses()
    return (
        <Card className={classes.cardRoot} key={key}>
            <CardActionArea className={classes.actionArea} >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={2} className={classes.imageBox} justifyContent="center">
                        <Skeleton variant='rectangle' width={'4em'} height={'3.5rem'} />
                    </Grid>
                    <Grid item xs={12} sm={10} className={classes.alignItemsinXs}>
                        <Skeleton variant='text' />
                        <Skeleton variant='text' />
                        <Skeleton variant='text' />
                        <Skeleton variant='text' />
                    </Grid>

                </Grid>
            </CardActionArea>
        </Card>
    )
}
