import React from 'react'
import { Box, Container } from '@material-ui/core'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { Step } from './components/Step'
import { LineAwesome, SvgFile, SvgPenAltSolid, SvgUser } from 'react-line-awesome-svg'
const HowItWorks = () => {
    return (
        <Box>
            <HomePagesHeader page="How It Works" description="Get a digital tour of how Jobhunt works for you." />
            <Container maxWidth='lg'>
                <Step
                    direction="ltr"
                    description="inJob is the leading and longest-running online recruitment in Turkey. We understand that job-seekers come to us not only for a job, but for an pportunity to realize their professional."
                    icon={<LineAwesome icon={SvgUser} />}
                    image="https://creativelayers.net/themes/jobhunt-html/images/resource/hw1.jpg"
                    number={1}
                    title="Register an account"
                />
                <Step
                    direction="rtl"
                    description="You’ll receive applications via email. You can also manage jobs and candidates from your Indeed dashboard. Review applications, Schedule interviews and view recommended candidates all from one place."
                    icon={<LineAwesome icon={SvgFile} />}
                    image="https://creativelayers.net/themes/jobhunt-html/images/resource/hw2.jpg"
                    number={2}
                    title="Specify & Search Your Job"
                />
                <Step
                    direction="ltr"
                    description="inJob is the leading and longest-running online recruitment in Turkey. We understand that job-seekers come to us not only for a job, but for an pportunity to realize their professional."
                    icon={<LineAwesome icon={SvgPenAltSolid} />}
                    image="https://creativelayers.net/themes/jobhunt-html/images/resource/hw3.jpg"
                    number={3}
                    title="Apply For Job"
                />
            </Container>

        </Box>
    )
}
export default HowItWorks