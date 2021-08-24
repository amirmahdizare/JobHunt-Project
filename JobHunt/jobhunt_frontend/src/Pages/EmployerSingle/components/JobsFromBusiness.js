import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Jh_JobCard from '../../../components/Jh_JobCard'

export const JobsFromBusiness = () => {
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>Jobs from Business Network</Typography>
            <Box m={2}>
            <Jh_JobCard
                jobTitle="Web Designer / Developer"
                companyName="Massimo Artemisis"
                companyLocation="Sacramento, California"
                workTime="FULL TIME"
                registeredDate="5 months Ago"
            />
            <Jh_JobCard
                jobTitle="C Developer (Senior) C .Net"
                companyName="Massimo Artemisis"
                companyLocation="Sacramento, California"
                workTime="PART TIME"
                registeredDate="5 months Ago"

            />
            <Jh_JobCard
                jobTitle="Regional Sales Manager South"
                companyName="Massimo Artemisis"
                companyLocation="Sacramento, California"
                workTime="FULL TIME"
                registeredDate="5 months Ago"

            />
            <Jh_JobCard
                jobTitle="Marketing Dairector"
                companyName="Massimo Artemisis"
                companyLocation="Sacramento, California"
                workTime="FULL TIME"
                registeredDate="5 months Ago"

            />
            </Box>

        </Grid>
    )
}
