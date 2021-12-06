import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { Jh_Logo1 } from '../../../../../Jh_Logo1'
import SocialMedias from './components/SocialMedias'
import { makeStyles } from '@material-ui/core'
const useClasses = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    margin: theme.spacing(2),
    padding: theme.spacing(2),

  },
  text: {
    color: '#8a99b3',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

  }
}))
const ContactUs = () => {
  const classes = useClasses()
  return (
    <Grid item xs={12} md={3}>
      <Box className={classes.root} height="100%">
        <Jh_Logo1 />
        {/* Address */}
        <Typography className={classes.text} >ًRoom 605, Unit 5 Building 1,Kaide Jinxiu, Balizhuang, Chaoyang District, Beijing </Typography>
        {/* Phone Number */}
        <Typography className={classes.text} >+86 5629-1029</Typography>
        {/* Email */}
        <Typography className={classes.text} >info@jobhunt.com</Typography>
        <SocialMedias />

      </Box>
    </Grid>
  )
}
export default ContactUs
