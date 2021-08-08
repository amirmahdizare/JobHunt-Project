import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Box } from '@material-ui/core'
import {DownloadBox} from './components/DownloadBox'
import ContactUs from './components/ContactUs/ContactUs'
import FAQ from './components/FAQ'
import { FindJobs } from './components/FindJobs'
const useClasses =makeStyles(theme=>({
   root:{
       backgroundColor:'#24324a',
   }
}))
const Footer = () => {
    const classes=useClasses()
    return (
        <Box className={classes.root} display="flex" flexWrap="wrap" justifyContent="space-around">
            <ContactUs/>
            <FAQ/>
            <FindJobs/>
            <DownloadBox/>
        </Box>
    )
}

export default Footer