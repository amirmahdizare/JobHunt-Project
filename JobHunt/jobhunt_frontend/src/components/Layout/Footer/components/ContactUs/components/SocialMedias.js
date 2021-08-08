import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { Box } from '@material-ui/core';
const iconStyle={
    color:'#8a99b3',
    cursor:'pointer'
}
const SocialMedias = () =>{
    return (
        <Box display="flex" justifyContent="space-between" width="25%">
            <FacebookIcon style={iconStyle}/>
            <TwitterIcon style={iconStyle}/>
            <LinkedInIcon style={iconStyle}/>
            <PinterestIcon style={iconStyle}/>
        </Box>
    )
}
export default SocialMedias