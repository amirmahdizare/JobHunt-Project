import { Box } from '@material-ui/core'
import React from 'react'
import { Jh_JobSingleHeader } from '../../components/Jh_JobSingleHeader'

export const JobSingle = () => {
    return (
        <Box>
            <Jh_JobSingleHeader 
            image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg"
            jobTitle="Senior Web Designer"
            workTime="PART TIME"
            location="Ajax, Ontario"
            datePosted="Posted 4 years ago"/>


            
        </Box>
    )
}
