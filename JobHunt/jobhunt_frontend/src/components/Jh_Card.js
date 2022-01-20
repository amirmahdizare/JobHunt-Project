import { Box,makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles=makeStyles(theme=>({
    card:{
        border:'1px',
        borderStyle:'solid',
        borderColor:'rgba(0, 0, 0, 0.23)',
        borderRadius:theme.spacing(1/2)
    }
}))
export const Jh_Card = (props) => {
    const classes=useStyles()
    return (
        <Box className={classes.card} display="flex"  justifyContent="center" px={props?.padding != 'off' ? 1 : 0} my={2}  {...props}>
            {props.children}  
        </Box>
    )
}
