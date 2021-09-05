import { Box, Grid, Typography } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'
import { mergeClasses } from '@material-ui/styles'
import React from 'react'
import { LineAwesome } from 'react-line-awesome-svg'
import { makeStyles } from '@material-ui/core'
const useStyles=makeStyles(theme=>({
    root:{
        display:'flex',
        marginTop:theme.spacing(3),
        marginBottom:theme.spacing(3),
        '&:hover':{
            '& $icon':{
                backgroundColor:theme.palette.secondary.main,
                fill:'white'
            }
        }
    },
    icon:{
        border: '2px solid #e8ecec',
        borderRadius:'50%',
        fill:theme.palette.text.secondary,
        fontSize:theme.typography.h2.fontSize,
        marginRight:theme.spacing(2),
        transition:'all 0.5s ease',
        padding:theme.spacing(2),
    }
}))
export const ServiceCard = (props) => {
    const classes = useStyles()
    const {iconName , title, description} = props
    return (
        <Grid item xs={12} sm={6} lg={4} className={classes.root}>
            <Box><LineAwesome icon={iconName} className={classes.icon}/></Box>
            <Box>
                <Typography gutterBottom>{title}</Typography>
                <Typography variant="body2" color="textSecondary">{description}</Typography>
            </Box>
        </Grid>
    )
}
