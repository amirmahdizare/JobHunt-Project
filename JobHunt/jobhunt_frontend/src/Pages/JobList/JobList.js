import { Box, Container, Divider, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Jh_AccordionFilterBox from '../../components/Jh_AccordionFilterBox'
import { ContentHeader } from '../../components/ContentHeader'
import Jh_SearchKeyword from '../../components/Jh_SearchKeyword'
import Jh_SelectLocation from '../../components/Jh_SelectLocation'
import { Email_Sort } from './components/Email_Sort'
import Jobs from './components/Jobs'
import SearchTags from './components/SearchTags'
import { StillNeedHelp } from './components/StillNeedHelp'
import { useGetAllCorporations } from '../../hooks/useGetAllCorporations'
import { connect } from 'react-redux';
import { getCategories, getCooperation } from '../../Store/Actions/jobAction'

const JobList = ({ JobReducer, getCategories, getCooperation }) => {


    useEffect(() => {
        getCategories();
        getCooperation();
    }, [])

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
                            ]}
                            filterProp='datePosted'
                        />
                        <Jh_AccordionFilterBox
                            title="Job Type"
                            items={JobReducer?.cooperationsList}
                            filterProp='jobType'
                        // items={corporations ? Object.values(corporations) : []}
                        />
                        <Jh_AccordionFilterBox
                            variant="withSearch"
                            title="Specialism"
                            filterProp='specialism'
                            items={JobReducer.specialismListCopy} />

                        <Jh_AccordionFilterBox
                            variant="withSearch"
                            title="Categories"
                            filterProp='categories'
                            items={JobReducer.categoriesListCopy} />

                        <Jh_AccordionFilterBox
                            title="Offerd Salary"
                            filterProp='offeredSalary'
                            items={[
                                { name: '5K-10K' },
                                { name: '10K-20K' },
                                { name: '20K-30K' },
                                { name: '30K-40K' },
                                { name: '40K-50K' },
                                { name: 'Up To 50K' },
                            ]} />
                        <Jh_AccordionFilterBox
                            title="Career Level"
                            filterProp='careerLevel'
                            items={[
                                { name: 'Intermediate' },
                                { name: 'Normal' },
                                { name: 'Special' },
                                { name: 'Experienced' },
                            ]} />
                        <Jh_AccordionFilterBox
                            title="Experince"
                            filterProp='experience'
                            items={[
                                { name: '1 Year to 2 Year' },
                                { name: '2 Year to 3 Year' },
                                { name: '3 year to 4 Year' },
                                { name: '4 Year to 5 Year' },
                            ]} />
                        {/* <Jh_AccordionFilterBox
                            title="Gender"
                            items={[
                                { name: 'Male' },
                                { name: 'Female' },
                                { name: 'Others' },
                            ]} /> */}
                        <Jh_AccordionFilterBox
                            title="Industry"
                            filterProp='industry'
                            items={JobReducer.industriesList} />
                        <Jh_AccordionFilterBox
                            title="Qualification"
                            filterProp='qualification'
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
                        <Jobs corporations={JobReducer?.cooperationsList} />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
const mapStateToProps = state => {
    return {
        JobReducer: state.JobReducer
    };
};
export default connect(mapStateToProps, { getCategories, getCooperation })(JobList);