import { Box, Container, Divider, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Jh_AccordionFilterBox } from '../../components/Jh_AccordionFilterBox'
import { ContentHeader } from '../../components/ContentHeader'
import { Jh_SearchKeyword } from '../../components/Jh_SearchKeyword'
import { Jh_SelectLocation } from '../../components/Jh_SelectLocation'
import { Email_Sort } from './components/Email_Sort'
import { Jobs } from './components/Jobs'
import { SearchTags } from './components/SearchTags'
import { StillNeedHelp } from './components/StillNeedHelp'
import { useGetAllCorporations } from '../../hooks/useGetAllCorporations'

const JobList = () => {

    const getCorporations = useGetAllCorporations();
    const [corporations, setCorporations] = useState([])

    useEffect(() => {
        var corporationsObject = [];
        if (getCorporations) {
            for (var i in Object.values(getCorporations)) {

                corporationsObject.push({
                    "name": Object.values(getCorporations)[i],
                });
            }
            setCorporations(corporationsObject)
        }
    }, [getCorporations])

    return (
        <Box>
            <ContentHeader image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg" text="Job List" />
            <Container maxWidth="lg" style={{ overflow: 'hidden' }} >
                <Grid container spacing={4} >
                    <Grid item xs={12} md={3} style={{ borderRight: '1px solid #edeff7' }}>
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
                            items={corporations}
                        // items={corporations ? Object.values(corporations) : []}
                        />
                        <Jh_AccordionFilterBox
                            variant="withSearch"
                            title="Specialism"
                            items={[
                                { name: 'Accountancy', number: 2 },
                                { name: 'Banking', number: 2 },
                                { name: 'Charity & Voluntary ', number: 3 },
                                { name: 'Digital & Creative ', number: 4 },
                                { name: 'Estate Agency', number: 3 },
                                { name: 'Graduate', number: 2 },
                                { name: 'IT Contractor', number: 7 },

                            ]} />
                        <Jh_AccordionFilterBox
                            title="Offerd Salary"
                            items={[
                                { name: '10K-20K' },
                                { name: '20K-30K' },
                                { name: '30K-40K' },
                                { name: '40K-50K' },
                            ]} />
                        <Jh_AccordionFilterBox
                            title="Career Level"
                            items={[
                                { name: 'Intermediate' },
                                { name: 'Normal' },
                                { name: 'Special' },
                                { name: 'Experienced' },
                            ]} />
                        <Jh_AccordionFilterBox
                            title="Experince"
                            items={[
                                { name: '1 Year to 2 Year' },
                                { name: '2 Year to 3 Year' },
                                { name: '3 year to 4 Year' },
                                { name: '4 Year to 5 Year' },
                            ]} />
                        <Jh_AccordionFilterBox
                            title="Gender"
                            items={[
                                { name: 'Male' },
                                { name: 'Female' },
                                { name: 'Others' },
                            ]} />
                        <Jh_AccordionFilterBox
                            title="Industry"
                            items={[
                                { name: 'Meezan Job' },
                                { name: 'Speicalize Jobs' },
                                { name: 'Business Jobs' },
                            ]} />
                        <Jh_AccordionFilterBox
                            title="Qualification"
                            items={[
                                { name: 'Matriculation' },
                                { name: 'Intermidiate' },
                                { name: 'Gradute' },

                            ]} />
                        <StillNeedHelp />
                    </Grid>
                    {/* <Divider orientation="vertical" flexItem light /> */}
                    <Grid item xs={12} md={9} >
                        <SearchTags />
                        <Email_Sort />
                        <Jobs corporations={corporations} />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
export default JobList