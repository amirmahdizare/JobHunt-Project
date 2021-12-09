import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { capitalizeFirstLetter } from '../../../utils'
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        height: 'max-content',
        '&:hover': {
            '& $icon': {
                backgroundColor: theme.palette.secondary.main,
                fill: 'white'
            }
        }
    },
    icon: {
        alignContent: 'center',
        border: '2px solid #e8ecec',
        borderRadius: '50%',
        display: 'flex',
        fill: theme.palette.text.secondary,
        fontSize: theme.typography.h2.fontSize,
        height: '5vh',
        justifyContent: 'center',
        marginRight: theme.spacing(2),
        float: 'left',
        transition: 'all 0.5s ease',
        padding: theme.spacing(2),
        position: 'relative',
        width: '5vh',

    }
}))
export const ServiceCard = (props) => {
    const classes = useStyles()
    const { iconName, title, description } = props
    return (
        <Grid item xs={12} sm={6} lg={4} className={classes.root}>
            <Box className={classes.icon}>
                <i className={typeof iconName?.[1] =='string' ? iconName : "la la-business-time"}></i>
            </Box>
            <Box >
                <Typography gutterBottom>{title ? capitalizeFirstLetter(title) : null}</Typography>
                <Typography variant="body2" color="textSecondary">{description}</Typography>
            </Box>
        </Grid>
    )
}
