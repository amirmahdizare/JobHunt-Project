import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { LineAwesome, SvgFacebook, SvgGoogle, SvgTwitter } from 'react-line-awesome-svg'
import { Jh_Button } from '../../../components/Jh_Button'

export const SharePost = () => {
    return (
        <Box display="flex" alignItems="center">
        <Typography >Share&nbsp;&nbsp;&nbsp;</Typography>
        <Jh_Button
            // href="/#"
            color="secondary"
            icon={<LineAwesome icon={SvgGoogle} />}></Jh_Button>
        <Jh_Button
            // href="/#"
            color="primary"
            icon={<LineAwesome icon={SvgTwitter} />}></Jh_Button>
        <Jh_Button
            // href="/#"
            color="warning"
            icon={<LineAwesome icon={SvgFacebook} />}></Jh_Button>
    </Box>
    )
}
