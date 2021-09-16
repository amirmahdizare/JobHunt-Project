import { Box ,makeStyles, Typography} from '@material-ui/core'
import React from 'react'
const useStyles=makeStyles(theme=>({
    root:{
        alignItems:'center',
        display:'flex',
        padding:theme.spacing(2),
        '& svg':{
            fontSize:theme.typography.h4.fontSize,
            fill:theme.palette.primary.light
        },
        '&:hover':{
            '& svg':{
                fill:theme.palette.secondary.light
            } 
        }
    }
}))
export const InfoItem = (props) => {
    const classes=useStyles()
    return (
        <Box className={classes.root} >
            {props.icon}
            <Box ml={2}>
            <Typography >{props.title}</Typography>
            <Typography variant="body2" color="textSecondary">{props.description}</Typography>
            </Box>
        </Box>
    )
}
