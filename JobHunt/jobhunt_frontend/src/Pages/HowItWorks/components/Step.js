import { Badge, Box, Card, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            direction: (props) => (props.direction),
            marginTop: theme.spacing(7),
            marginBottom: theme.spacing(7)
        },
        [theme.breakpoints.down('sm')]: {
            direction: 'ltr',
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3)
        }
    },
    stepImage: {
        borderRadius: theme.spacing(1),
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            width: '55%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        '&:before': {
            background: 'linear-gradient(45deg, rgba(251,35,106,1) 0%,rgba(251,35,106,1) 44%,rgba(20,31,114,1) 100%)',
            content: '""',
            height: '100%',
            left: '0',
            opacity: '0.8',
            position: 'absolute',
            top: '0',
            width: '100%',
        }
    },
    detailBox: {
        boxShadow: '0px 0px 30px rgb(0 0 0 / 10%)',
        boxSizing: 'border-box',
        borderRadius: theme.spacing(1),
        right: (props) => (props.direction == 'ltr' ? '0' : 'unset'),
        left: (props) => (props.direction == 'rtl' ? '0' : 'unset'),
        top: '10%',
        overflow: 'unset',
        [theme.breakpoints.up('md')]: {
            width: '52%',
            position: 'absolute',
        },
        [theme.breakpoints.down('sm')]: {
            position: 'unset',
            width: '100%'
        },

    },
    detail: {
        padding: theme.spacing(10),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(4),
            textAlign: 'left'
        },
        position: 'relative',
        width: '70%',
    },
    badge: {
        borderRadius: '50%',
        bottom: 'calc(50% - 30px)',
        height: '60px',
        fontSize: theme.typography.h2.fontSize,
        width: '60px',
        [theme.breakpoints.up('md')]: {
            right: 'unset',
            transform: 'unset',
            top: 'unset',
            left: (props) => (props.direction == 'ltr' ? '-30px' : 'unset'),
            right: (props) => (props.direction == 'rtl' ? '-30px' : 'unset'),

        },
        [theme.breakpoints.down('sm')]: {
            top: '-30px',
            right: 'unset ',
            left: '50% ',
            transform: 'translateX(-50%)',
        },
    },
    watermark: {
        color: '#edeff7',
        [theme.breakpoints.up('md')]: {
            fontSize: '120px',
            left: (props) => (props.direction == 'rtl' ? '0px' : 'unset'),
            right: (props) => (props.direction == 'ltr' ? '0px' : 'unset'),
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: '70px',
            right: '10px',
        },
        position: 'absolute',
        top: '10px',
        zIndex: '1',
    },
}))
export const Step = (props) => {
    const classes = useStyles(props)
    const { number, title, description, icon, direction, image } = props
    return (
        <Box position="relative" width="100%" className={classes.container}>
            <Card elevation={0} className={classes.stepImage}>
                <CardMedia component="img" image={image} />
            </Card>
            <Box className={classes.detailBox}>
                <Badge classes={{ badge: classes.badge }} component="div" color="secondary" badgeContent={number} >
                    <Box className={classes.watermark}>{icon}</Box>
                    <Card elevation={0} className={classes.detail} >
                        <Typography variant="h5" gutterBottom >{title}</Typography>
                        <Typography color="textSecondary">{description}</Typography>
                    </Card>
                </Badge>
            </Box>
        </Box>
    )
}
