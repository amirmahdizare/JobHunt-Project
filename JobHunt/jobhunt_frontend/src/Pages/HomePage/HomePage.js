import React from 'react'
import SearchSection from './components/SearchSection/SearchSection'
import PopularCategories from './components/PopularCategories/PopularCategories'
import JobHuntResume from './components/JobHuntResume/JobHuntResume'
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs'
const HomePage = () => {
    return (
        <div>
                <SearchSection />
                <PopularCategories />
                <JobHuntResume />
                <FeaturedJobs/>
        </div>
    )
}
export { HomePage }