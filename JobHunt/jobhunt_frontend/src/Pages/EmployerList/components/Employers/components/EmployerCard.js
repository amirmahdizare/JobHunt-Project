import {  Card, CardActionArea, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { noImageEmployer } from '../../../../../asset';
const useClasses = makeStyles(theme => ({

    cardRoot: {
        boxShadow: 'unset',
        border: '2px solid transparent',
        textDecoration: 'none',
        height: '100%',
        width: '100%',
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
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        [theme.breakpoints.only('xs')]:
            { display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }

    }
}))
export const EmployerCard = (props) => {
    const { id } = props
    const classes = useClasses()
    return (
        <Link underline='none' href={`/employer/${id}`}>
            <Card className={classes.cardRoot} >
                <CardActionArea className={classes.actionArea} >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={2} className={classes.imageBox}>

                            <CardMedia
                                className={classes.cardMedia}
                                image={props.logo || noImageEmployer}
                                component="img" />
                        </Grid>
                        <Grid item xs={12} sm={10} className={classes.alignItemsinXs}>
                            {/* <Typography className={classes.openPosition} color="primary" gutterBottom>{props.numberOfOpenPositions}&nbsp;Open Position</Typography> */}
                            <Typography variant="h6" gutterBottom>{props.name}</Typography>
                            <Typography color="secondary" gutterBottom>{props.category}</Typography>
                            <Typography gutterBottom variant="body2"><LocationOnOutlinedIcon color="action" style={{ verticalAlign: 'middle' }} />&nbsp;{props.location}</Typography>
                            <Typography component={'p'} variant="body2" color="textSecondary" gutterBottom
                                dangerouslySetInnerHTML={{ __html: props.description && props.description.substr(0, 80) + '...' }} >
                            </Typography>
                        </Grid>

                    </Grid>
                </CardActionArea>
            </Card>
        </Link>
    )
}
