import { Box, Container, Divider, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { LineAwesome, SvgClock, SvgFile, SvgSearchPlusSolid, SvgSearchSolid } from 'react-line-awesome-svg'
import { Jh_JobSingleHeader } from '../../components/Jh_JobSingleHeader'
import { Jh_Share } from '../../components/Jh_Share'
import { Jh_StatisticCard } from '../../components/Jh_StatisticCard'
import { ApplyBox } from './components/ApplyBox'
import { JobDetailContainer } from './components/JobDetailContainer'
import { JobInfo } from './components/JobInfo'
import { JobLocation } from './components/JobLocation'
import { JobOverview } from './components/JobOverview'
import { RecentJobs } from './components/RecentJobs';
import { useGetSpecificCompany } from '../../hooks/useGetSpecificCompany';
import { useGetSingleJob } from '../../hooks/useGetSingleJob';
import { useHistory } from 'react-router';
import { formatDate } from '../../components'
import { generateImageURL } from "../../api/OSS/minioAPI";

const JobSingle = () => {

    const history = useHistory();
    const path = history.location.pathname.split('/');
    const jobId = path[path.length - 2];
    const companyId = path[path.length - 1];
    const job = useGetSingleJob(jobId);
    const company = useGetSpecificCompany(companyId);
    const [logoImage, setLogoImage] = useState(false)


    const getImage = async () => {
        if (company.logo) {
            const onGetImage = await generateImageURL('jobhunt', Object.values(company.logo)[0]);
            return onGetImage
        }
    }

    useEffect(() => {
        getImage().then(data => setLogoImage(data))
    }, [company])

    return (
        <Box>
            <Jh_JobSingleHeader
                image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg"
                jobTitle={job.title}
                workTime="PART TIME"
                location={company.address}
                datePosted={`Posted ${formatDate(job.updated_at)}`}
            />
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <JobInfo
                            companyName={company.name}
                            companyLogo={logoImage}
                            location={company.address}
                            website={company.website}
                            phoneNumber="+90 538 963 54 87"
                            emailAddress="ali.tufan@jobhunt.com"
                        />
                        <Divider light />
                        <JobDetailContainer
                            title="Job Description"
                            text={[job.description]} />
                        {/* <JobDetailContainer
                            title="Required Knowledge, Skills, and Abilitie"
                            items={[
                                'Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS)',
                                'Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred concepting)',
                                'Cross-browser and platform testing as standard practice',
                                'Experience using Invision a plus',
                                'Experience in video production a plus or, at a minimum, a willingness to learn'
                            ]} />
                        <JobDetailContainer
                            title="Education + Experience"
                            items={[
                                'Advanced degree or equivalent experience in graphic and web design',
                                '3 or more years of professional design experience',
                                'Direct response email experience',
                                'Ecommerce website design experience',
                                'Familiarity with mobile and web apps preferred',
                                'Excellent communication skills, most notably a demonstrated ability to solicit and address creative and design feedback',
                                'Must be able to work under pressure and meet deadlines while maintaining a positive attitude and providing exemplary customer service',
                                'Ability to work independently and to carry out assignments to completion within parameters of instructions given, prescribed routines, and standard accepted practices'
                            ]} /> */}
                        {/* <Divider light /> */}
                        {/* <Box width={1 / 4} my={2}>
                            <Jh_Share />
                        </Box> */}
                        {/* <Divider light /> */}
                        {/* <RecentJobs /> */}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ApplyBox job={job} />
                        <JobOverview job={job} />
                        {/* <JobLocation company={company} /> */}
                        <Jh_StatisticCard
                            itemicon={<LineAwesome icon={SvgClock} />}
                            // itemName="Days"
                            itemNumber={formatDate(job.updated_at)}
                        />
                        <Jh_StatisticCard
                            itemicon={<LineAwesome icon={SvgSearchPlusSolid} />}
                            itemName="Displayed"
                            itemNumber="35697"
                        />
                        <Jh_StatisticCard
                            itemicon={<LineAwesome icon={SvgFile} />}
                            itemName="Application"
                            itemNumber="300-500"
                        />

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default JobSingle