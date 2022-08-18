import { Box,makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles=makeStyles(theme=>({
    card:{
        border:'2px solid #e2e2e2',
        borderRadius:theme.spacing(1)
    }
}))
export const Jh_Card = (props) => {
    const classes=useStyles()
    return (
        <Box className={classes.card} display="flex"  justifyContent="center" px={1} my={2}  {...props}>
            {props.children}  
        </Box>
    )
}
