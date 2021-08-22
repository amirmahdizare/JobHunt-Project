import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { Jh_Avatar } from '../../../../../Jh_Avatar';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
export const Jh_CandidateDetail = (props) => {
  return (
    <Box mt={1} display="flex" alignItems="center" flexDirection="column" >
      <Jh_Avatar size="large" src="https://creativelayers.net/themes/jobhunt-html/images/resource/es1.jpg" name="Ali tofan" />
      <Typography variant="h5" gutterBottom>{props.name}</Typography>
      <Box>
        <Typography color="primary" display="inline" gutterBottom>{props.jobTitle}&nbsp;</Typography>
        <Typography display="inline" gutterBottom>at&nbsp;{props.company}</Typography>
      </Box>
      <Typography variant="body2" gutterBottom>{props.email}</Typography>
      <Typography variant="body2" gutterBottom>Member Since &nbsp; {props.memberSince}</Typography>
      <Typography variant="body2" gutterBottom><LocationOnOutlinedIcon color="secondary" style={{ verticalAlign: 'middle' }} fontSize="small" />{props.location}</Typography>
    </Box>
  )
}
