import { Button, Box, Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, makeStyles, Grid, Divider, Link } from '@material-ui/core'
import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import moment from 'moment';
const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: theme.spacing(1),
        boxShadow: 'unset',
        border: '1px solid #e2e2e2',
        bottom: '0px',
        textAlign: 'center',
        position: 'relative',
        transition: 'bottom 0.4s ease',

        '&:hover': {
            boxShadow: '0px 0px 25px rgba(0,0,0 , 0.15)',
            borderColor: 'white',
            bottom: '15px'
        },
        '& .MuiTypography-root ': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        '& .MuiCardContent-root': {
            padding: theme.spacing(1),
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            position: 'relative'

        },
        '& .MuiCardActions-root': {
            justifyContent: 'center'
        },
        '& .MuiButtonBase-root': {
            textTransform: 'none'
        }
    },
    detail: {
        backgroundColor: 'white',
        borderRadius: theme.spacing(1),
        display: (props) => !props.numberOfComments && !props.date ? 'none' : 'flex',
        justifyContent: 'center',
        left: '50%',
        padding: '10px',
        position: 'absolute',
        transform: 'translateX(-50%)',
        top: '-20%',
        width: '70%',
        '& .MuiDivider-root': {
            backgroundColor: theme.palette.secondary.main,
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        }
    }
}));

const Tip = (props) => {
    const classes = useStyles(props);
    const date = moment(props.date).format('DD MMM, YYYY');
    return (
        <Grid item xs={12} sm={6} lg={4} {...props}>
            <Link underline='none' href={"blogs/" + props.id}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={props.title}
                            height="250"
                            image={props.image}
                            title={props.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" >
                                {props.title}
                            </Typography>
                            <Box className={classes.detail} >
                                <Typography color="secondary">{date}</Typography>
                                {props.numberOfComments ?
                                    <>
                                        {props.date ? <Divider color="secondary" orientation="vertical" flexItem /> : null}
                                        <Typography color="secondary" >{props.numberOfComments} Comments</Typography>
                                    </>
                                    : null}

                            </Box>

                            {!!props.description && props.description.lenght > 100
                                ? <Typography variant="subtitle2" color="textSecondary" component="p">{props.description.slice(0, 100)}</Typography>
                                : <><Typography variant="subtitle2" color="textSecondary" component="p">{props.description}<br /></Typography></>
                            }


                        </CardContent>
                        <Divider variant="middle" light />
                        <CardActions>
                            <Button
                                size="medium"
                                color="secondary"
                                href={"/blogs/" + props.id}
                                variant="text"
                                endIcon={<ArrowRightAltIcon />}>
                                Read More
                            </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    )
}
export default Tip