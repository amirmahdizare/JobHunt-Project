import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { LineAwesome, SvgFacebook, SvgGoogle, SvgTwitter } from 'react-line-awesome-svg'
import { Jh_Button } from '../components/Jh_Button'

export const Jh_Share = (props) => {
    return (
        <Box display="flex" alignItems="center">
            {props.hideShare ? null :<Box display={{xs:'none',sm:'block'}}><Typography >Share&nbsp;&nbsp;&nbsp;</Typography></Box>}
        
        <Jh_Button
            href={props.googleLink}
            color="secondary"
            icon={<LineAwesome icon={SvgGoogle} />}></Jh_Button>
        <Jh_Button
            href={props.TwitterLink}
            color="primary"
            icon={<LineAwesome icon={SvgTwitter} />}></Jh_Button>
        <Jh_Button
            href={props.facebookLink}
            color="warning"
            icon={<LineAwesome icon={SvgFacebook} />}></Jh_Button>
    </Box>
    )
}
