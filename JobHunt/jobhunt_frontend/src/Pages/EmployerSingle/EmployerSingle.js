import React from 'react'
import { Box, Container, Divider, Grid } from '@material-ui/core'
import { ContentHeader } from '../../components/ContentHeader'
import { EmployerInfo } from './components/EmployerInfo'
// import { ShareBox } from './components/ShareBox'
import { AboutBusiness } from './components/AboutBusiness'
import { CompanyInformation } from './components/CompanyInformation/CompanyInformation'
// import { JobsFromBusiness } from './components/JobsFromBusiness'
// import { ContactBusiness } from './components/ContactBusiness'
import { useGetData } from '../../hooks/useGetData'
import { getCompanyDetailById } from '../../api/public'
import { useParams } from 'react-router-dom'
import { SectionLoading } from '../../components/SectionLoading'
const EmployerSingle = () => {
    const { id } = useParams()
    const [data, error, loading] = useGetData(getCompanyDetailById, id)
    return (
        <Box >
            <ContentHeader image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg" text="Single Employer" />
            <Container maxWidth="lg">
                {loading && <SectionLoading />}
                {!loading && data &&
                <><Grid container style={{ marginTop: '16px' }} alignItems="center" >
                    <EmployerInfo
                    
                        name="Tera Planner"
                        location={data?.address}
                        // workTime="FULL TIME"
                        applications={1}
                        postDate="July 29, 2017"
                        views="868"
                        {...data}
                    />
                    {/* <ShareBox /> */}
                </Grid>
                <Divider light style={{ marginTop: '8px', marginBottom: '8px' }} />
                <Grid container spacing={2}>
                    <AboutBusiness 
                    // description=
                    //     {["Far much that one ran"]}
                        // description
                        {...data}
                        />
                    <CompanyInformation
                    {...data} 
                    
                    />
                    {/* <JobsFromBusiness/> */}
                    {/* <ContactBusiness/> */}
                </Grid></>}
            </Container>
        </Box>
    )
}
export default EmployerSingle