import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { Logo } from '../../../components/Logo'
import SocialMedias from './components/SocialMedias'
import { makeStyles } from '@material-ui/core'
import { classExpression } from '@babel/types'
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
const ContactUs = (props) => {
  const classes = useClasses()
  return (
    <Box className={classes.root} height="100%">
      <Logo />
      {/* Address */}
      <Typography className={classes.text} variant="h6">Collin Street West, Victor 8007, Australia.</Typography>
      {/* Phone Number */}
      <Typography className={classes.text} variant="h6">+1 246-345-0695</Typography>
      {/* Email */}
      <Typography className={classes.text} variant="h6">info@jobhunt.com</Typography>
      <SocialMedias />

    </Box>
  )
}
export default ContactUs