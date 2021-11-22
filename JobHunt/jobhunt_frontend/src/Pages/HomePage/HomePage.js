import React from 'react'
import SearchSection from './components/SearchSection/SearchSection'
import PopularCategories from './components/PopularCategories/PopularCategories'
import JobHuntResume from './components/JobHuntResume/JobHuntResume'
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs'
import {GotQuestion} from './components/GotQuestion/GotQuestion'
import { HappyCandidates } from '../../components/HappyCandidates/HappyCandidates'
import { Partners } from '../../components/Partners/Partners'
import { QuickCareerTips } from '../../components/QuickCareerTips/QuickCareerTips'
const HomePage = () => {
    return (
        <div>
                <SearchSection />
                <PopularCategories />
                <JobHuntResume />
                <FeaturedJobs/>
                <HappyCandidates/>
                <Partners/>
                <QuickCareerTips/>
                <GotQuestion/>
        </div>
    )
}
export default HomePage