import React from 'react'
import { Box, Typography } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove';
export const JobDetailContainer = (props) => {
    const {title, text,items}= props
    return (
        <Box my={2}>
            <Typography variant="h6" gutterBottom>{title}</Typography>
            {text ? text.map((paragraph,index) =>(
                <>
                 {index!=0 ? <br/>: undefined}
                <Typography color="textSecondary"  variant="body2" >{paragraph}</Typography>
                 </>
            )): null}
            {items ? items.map((item,index)=>(
                <>
                {index!=0 ? <br/> : undefined} 
                <Typography color="textSecondary" variant="body2"  ><RemoveIcon style={{verticalAlign:'middle'}} fontSize="small" color="inherit"/>&nbsp;{item}</Typography>
                </>
            )): null}

        </Box>
    )
}
