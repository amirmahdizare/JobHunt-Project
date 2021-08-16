import React from 'react'
import SearchSection from './components/SearchSection/SearchSection'
import PopularCategories from './components/PopularCategories/PopularCategories'
import JobHuntResume from './components/JobHuntResume/JobHuntResume'
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs'
import { HappyCandidates } from './components/HappyCandidates/HappyCandidates'
import { Supporters } from './components/Supporters/Supporters'
import { QuickCareerTips } from './components/QuickCareerTips/QuickCareerTips'
import {GotQuestion} from './components/GotQuestion/GotQuestion'
const HomePage = () => {
    return (
        <div>
                <SearchSection />
                <PopularCategories />
                <JobHuntResume />
                <FeaturedJobs/>
                <HappyCandidates/>
                <Supporters/>
                <QuickCareerTips/>
                <GotQuestion/>
        </div>
    )
}
export { HomePage }