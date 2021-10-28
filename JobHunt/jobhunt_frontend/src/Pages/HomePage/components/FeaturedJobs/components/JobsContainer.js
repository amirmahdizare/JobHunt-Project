import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import Jh_JobCard from '../../../../../components/Jh_JobCard.js'
const useClasses = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(5),
        width: '100%'
        ,
        '& .MuiCard-root:not(:last-child)': {
            borderBottom: '1px solid #e2e2e2'
        }
    }

}))
const JobsContainer = () => {
    const classes = useClasses()
    return (
        <Box className={classes.root}>
            {/* Worktime Must be one of these items  "FULL TIME" "PART TIME" "FREELANCE" "TEMPORARY" */}
            <Jh_JobCard
                jobTitle="Web Designer / Developer"
                companyName="Massimo Artemisis"
                companyLocation="Sacramento, California"
                workTime="FULL TIME"
                companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l1.png"
            />

            <Jh_JobCard
                jobTitle="Marketing Director"
                companyName="Tix Dog"
                companyLocation="Rennes, France"
                workTime="PART TIME"
                companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l2.png"
            />


            <Jh_JobCard
                jobTitle="C Developer (Senior) C .Net"
                companyName="StarHealth"
                companyLocation="London, United Kingdom"
                workTime="FULL TIME"
                companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l3.png"
            />


            <Jh_JobCard
                jobTitle="Application Developer For Android"
                companyName="Altes Bank"
                companyLocation="Istanbul, Turkey"
                workTime="FREELANCE"
                companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l4.png"
            />
            <Jh_JobCard
                jobTitle="Regional Sales Manager South east Asia"
                companyName="Vincent"
                companyLocation="Ajax, Ontario"
                workTime="TEMPORARY"
                companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l1.png"
            />

            <Jh_JobCard
                jobTitle="Social Media and Public Relation Executive"
                companyName="MediaLab"
                companyLocation="Ankara / Turkey"
                workTime="FULL TIME"
                companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l6.png"
            />
        </Box>
    )
}
export default JobsContainer