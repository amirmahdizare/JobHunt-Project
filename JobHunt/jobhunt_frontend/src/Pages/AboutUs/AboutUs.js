import { Box } from '@material-ui/core'
import React from 'react'
import { AboutUsDescription } from './components/AboutUsDescription'
import { Jh_HappyCandidates } from '../../components/Jh_HappyCandidates/Jh_HappyCandidates'
import { Jh_Statistics } from '../../components/Jh_Statistics'
import { Jh_QuickCareerTips} from '../../components/Jh_QuickCareerTips/Jh_QuickCareerTips'
import { Jh_Supporters } from '../../components/Jh_Supporters/Jh_Supporters'
import { Jh_HomePagesHeader } from '../../components/Jh_HomePagesHeader'
export const AboutUs = () => {
  
    return (
        <Box>
            <Jh_HomePagesHeader page="About Us" description="Keep up to date with the latest news"/>
            <AboutUsDescription/>
            <Jh_HappyCandidates/>
            <Jh_Statistics/>
            <Jh_QuickCareerTips/>
            <Jh_Supporters/>
            
        </Box>
    )
}
