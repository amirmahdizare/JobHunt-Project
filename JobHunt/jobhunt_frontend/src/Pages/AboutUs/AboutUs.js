import { Box } from '@material-ui/core'
import React from 'react'
import { AboutUsDescription } from './components/AboutUsDescription'
import { HappyCandidates } from '../../components/HappyCandidates/HappyCandidates'
import { Statistics } from '../../components/Statistics'
import { QuickCareerTips} from '../../components/QuickCareerTips/QuickCareerTips'
import { Partners } from '../../components/Partners/Partners'
import { HomePagesHeader } from '../../components/HomePagesHeader'
 const AboutUs = () => {
    return (
        <Box>
            <HomePagesHeader page="About Us" description="Keep up to date with the latest news"/>
            <AboutUsDescription/>
            <HappyCandidates/>
            <Statistics/>
            <QuickCareerTips/>
            <Partners/>
        </Box>
    )
}
export default AboutUs