import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Jh_BigJobCard from '../../../components/Jh_BigJobCard'
export const RecentJobs = () => {
    return (
        <Box my={2}>
            <Typography variant="h6">Recent Jobs</Typography>
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
            
        </Box>
    )
}
