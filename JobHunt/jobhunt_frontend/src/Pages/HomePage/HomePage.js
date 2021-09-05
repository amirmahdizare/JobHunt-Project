import React from 'react'
import SearchSection from './components/SearchSection/SearchSection'
import PopularCategories from './components/PopularCategories/PopularCategories'
import JobHuntResume from './components/JobHuntResume/JobHuntResume'
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs'
import {GotQuestion} from './components/GotQuestion/GotQuestion'
import { Jh_HappyCandidates } from '../../components/Jh_HappyCandidates/Jh_HappyCandidates'
import { Jh_Supporters } from '../../components/Jh_Supporters/Jh_Supporters'
import { Jh_QuickCareerTips } from '../../components/Jh_QuickCareerTips/Jh_QuickCareerTips'
const HomePage = () => {
    return (
        <div>
                <SearchSection />
                <PopularCategories />
                <JobHuntResume />
                <FeaturedJobs/>
                {/* <HappyCandidates/> */}
                <Jh_HappyCandidates/>
                {/* <Supporters/> */}
                <Jh_Supporters/>
                {/* <QuickCareerTips/> */}
                <Jh_QuickCareerTips/>
                <GotQuestion/>
        </div>
    )
}
export { HomePage }