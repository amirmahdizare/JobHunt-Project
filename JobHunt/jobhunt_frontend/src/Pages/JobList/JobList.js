import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import { Jh_AccordionFilterBox } from '../../components/Jh_AccordionFilterBox'
import { Jh_ContentHeader } from '../../components/Jh_ContentHeader'
import { Jh_SearchKeyword } from '../../components/Jh_SearchKeyword'
import { Jh_SelectLocation } from '../../components/Jh_SelectLocation'

export const JobList = () => {
    return (
        <Box>
            <Jh_ContentHeader image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg" text="Job List" />
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <Jh_SearchKeyword />
                        <Jh_SelectLocation />
                        <Jh_AccordionFilterBox 
                        title="Date Posted" 
                        items={[
                            { name: 'Last Hour' },
                            { name: 'Last 24 Hours' },
                            { name: 'Last 7 Days' },
                            { name: 'Last 14 Days' },
                            { name: 'Last 30 Days' },
                            { name: 'All' }
                        ]} />
                        <Jh_AccordionFilterBox 
                        title="Job Type"
                        items={[
                            {name:'FreeLance',color:'red',number:9},
                            {name:'FullTime',color:'blue',number:8},
                            {name:'Intership',color:'purple',number:8},
                            {name:'Part time',color:'green',number:5},
                            {name:'Temporary',color:'limegreen',number:9},
                            {name:'Volunteer',color:'#18f0f8',number:8},


                        ]}/>
                        <Jh_AccordionFilterBox 
                        variant="withSearch"
                        title="Specialism"
                        items={[
                           { name:'Accountancy', number:2},
                           { name:'Banking', number:2},
                           { name:'Charity & Voluntary ', number:3},
                           { name:'Digital & Creative ', number:4},
                           { name:'Estate Agency', number:3},
                           { name:'Graduate', number:2},
                           { name:'IT Contractor', number:7},

                        ]}/>
                        <Jh_AccordionFilterBox
                        title="Offerd Salary"
                        items={[
                            {name:'10K-20K'},
                            {name:'20K-30K'},
                            {name:'30K-40K'},
                            {name:'40K-50K'},
                        ]}/>
                        <Jh_AccordionFilterBox
                        title="Career Level"
                        items={[
                            {name:'Intermediate'},
                            {name:'Normal'},
                            {name:'Special'},
                            {name:'Experienced'},
                        ]}/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
