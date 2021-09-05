import { Box } from '@material-ui/core'
import React from 'react'
import { AboutUsDescription } from './components/AboutUsDescription'
import { AboutUsHeader } from './components/AboutUsHeader'
import { Jh_HappyCandidates } from '../../components/Jh_HappyCandidates/Jh_HappyCandidates'
import { Jh_Statistics } from '../../components/Jh_Statistics'
import { Jh_QuickCareerTips} from '../../components/Jh_QuickCareerTips/Jh_QuickCareerTips'
export const AboutUs = () => {
  
    return (
        <Box>
            <AboutUsHeader/>
            <AboutUsDescription/>
            <Jh_HappyCandidates/>
            <Jh_Statistics/>
            <Jh_QuickCareerTips/>
            
        </Box>
    )
}
