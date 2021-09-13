import React from 'react'
import { Box, IconButton, InputBase, Link,makeStyles, Typography } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import { Jh_Card } from '../../../components/Jh_Card'
const useStyles=makeStyles(theme=>({
    sendButton:{
        borderRadius:'unset',
        borderBottomRightRadius:theme.spacing(1),
        borderTopRightRadius:theme.spacing(1),
        backgroundColor:theme.palette.secondary.main,
        color:'#ffffff',
        margin:'-1px',
        '&:hover':{
            backgroundColor:theme.palette.secondary.main,
        },

    },
    card:{
        border:'1px solid #e2e2e2',
        borderRadius:theme.spacing(1),
        paddingRight:'unset',
    }
}))
export const StillNeedHelp = () => {
    const classes=useStyles()
    return (
        <Box>
            <Link underline="none" href="#"><Typography>Still Need Help?</Typography></Link>
            <Typography color="textSecondary">Let us now about your issue and a Professional will reach you out.</Typography>
            <Jh_Card className={classes.card}>
            <InputBase
                style={{  flex: 1 }}
                placeholder="Enter Valid Email Address"
                inputProps={{ 'aria-label': 'Enter Valid Email Address' }}
            />
            <IconButton classes={{root:classes.sendButton}} type="submit"  aria-label="search">
                <SendIcon color="inherit" />
            </IconButton>
        </Jh_Card>
   
        </Box>
    )
}
