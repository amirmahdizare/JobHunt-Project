import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { Jh_Logo1 } from '../../../../../Jh_Logo1'
import SocialMedias from './components/SocialMedias'
import { makeStyles } from '@material-ui/core'
import { useGetData } from '../../../../../../hooks/useGetData'
import { getContactInfo } from '../../../../../../api/public'
import { SectionLoading } from '../../../../../SectionLoading'
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
  const [info, error, loading] = useGetData(getContactInfo)
  return (
    <Grid item xs={12} md={3}>
      <Box className={classes.root} height="100%">
        <Jh_Logo1 />
        {loading && <SectionLoading />}
        {!loading && info && <>
          <Typography className={classes.text} >{info?.address} </Typography>
          <Typography className={classes.text} >{info?.phone}</Typography>
          <Typography className={classes.text} >{info?.email}</Typography>
          <SocialMedias />
        </>}

      </Box>
    </Grid>
  )
}
export default ContactUs
