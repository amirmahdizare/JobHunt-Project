import { Box, Link,makeStyles, MenuItem, MenuList, Typography } from '@material-ui/core'
import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const useStyles=makeStyles(theme=>({
    menuItem:{
        color:theme.palette.text.secondary,
            '&:hover':{
                color:theme.palette.secondary.main
            }
    }
}))
export const Jh_SideBarMenu = (props) => { 
    const classes=useStyles()
    const {items ,title} =props
    return (
        <Box my={2}>
            <Typography variant="h6">{title}</Typography>
            <MenuList  >
                {items ?
                items.map((item)=>(
                    <MenuItem classes={{root:classes.menuItem}} ><Link color="inherit" underline="none" href={item.href}><Typography variant="body2" color="inherit"><ArrowBackIosIcon fontSize="inherit" color="inherit" style={{verticalAlign:'middle'}} color="inherit"/>&nbsp;&nbsp;{item.name}</Typography></Link></MenuItem>
                )): null}
            </MenuList>
            
        </Box>
    )
}
