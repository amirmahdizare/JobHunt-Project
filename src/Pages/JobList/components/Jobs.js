import { Box, Button, Divider, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Jh_BigJobCard from '../../../components/Jh_BigJobCard'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
export const Jobs = () => {
    const [numberOfRecords,setNumberOfRecords]= useState(10)
    return (
        <Box my={2} >
            <Typography variant="h5">98 Jobs & Vacancies</Typography>
            <Box mx={-2} my={2} >
            {/* <Divider light variant="fullWidth"/> */}
            <Jh_BigJobCard
                jobTitle="Web Designer / Developer"
                companyName="Massimo Artemisis"
                companyLocation="Sacramento, California"
                workTime="FULL TIME"
                companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l1.png"
            />

            <Jh_BigJobCard
                jobTitle="Marketing Director"
                companyName="Tix Dog"
                companyLocation="Rennes, France"
                workTime="PART TIME"
                companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l2.png"
            />


            <Jh_BigJobCard
                jobTitle="C Developer (Senior) C .Net"
                companyName="StarHealth"
                companyLocation="London, United Kingdom"
                workTime="FULL TIME"
                companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l3.png"
            />


            <Jh_BigJobCard
                jobTitle="Application Developer For Android"
                companyName="Altes Bank"
                companyLocation="Istanbul, Turkey"
                workTime="FREELANCE"
                companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l4.png"
            />
            <Jh_BigJobCard
                jobTitle="Regional Sales Manager South east Asia"
                companyName="Vincent"
                companyLocation="Ajax, Ontario"
                workTime="TEMPORARY"
                companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l1.png"
            />

            <Jh_BigJobCard
                jobTitle="Social Media and Public Relation Executive"
                companyName="MediaLab"
                companyLocation="Ankara / Turkey"
                workTime="FULL TIME"
                companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l6.png"
            />
            </Box>
            <Box display="flex" justifyContent="center">

            <Button startIcon={<MoreHorizIcon color="action"   />}  onClick={()=>setNumberOfRecords(numberOfRecords+10)} variant="outlined" color="default">View More</Button>
            </Box>
        </Box>
    )
}
