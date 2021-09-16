import React from 'react'
import { Box,makeStyles, Typography } from '@material-ui/core'
const useStyles=makeStyles(theme=>({
    root:{
        alignItems:'center',
        border:'2px solid #e8ecec',
        borderRadius:theme.spacing(1),
        display:'flex',
        justifyContent:'flex-start',
        fill:'#8b91dd',
        fontSize:theme.typography.h4.fontSize,
        marginTop:theme.spacing(3),
        marginBottom:theme.spacing(3),
        padding:theme.spacing(2),
        verticalAlign:'middle',  
    }
}))
export const Jh_StatisticCard = (props) => {
    const classes=useStyles()
    const {itemicon,itemName,itemNumber} = props
    return (
        <Box className={classes.root}>
            {itemicon}
            <Typography display="inline">&nbsp;&nbsp;{itemNumber}</Typography>
            <Typography display="inline" color="textSecondary">&nbsp;&nbsp;{itemName}</Typography>
        </Box>
    )
}
