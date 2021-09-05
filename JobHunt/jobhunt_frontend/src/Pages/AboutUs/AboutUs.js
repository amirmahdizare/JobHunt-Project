import { Box } from '@material-ui/core'
import React from 'react'
import { AboutUsDescription } from './components/AboutUsDescription'
import { AboutUsHeader } from './components/AboutUsHeader'
import { Jh_HappyCandidates } from '../../components/Jh_HappyCandidates/Jh_HappyCandidates'
import { Jh_Statistics } from '../../components/Jh_Statistics'
export const AboutUs = () => {
  
    return (
        <Box>
            <AboutUsHeader/>
            <AboutUsDescription/>
            <Jh_HappyCandidates/>
            <Jh_Statistics/>
            
        </Box>
    )
}
