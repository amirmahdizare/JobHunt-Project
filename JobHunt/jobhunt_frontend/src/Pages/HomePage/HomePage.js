import React from 'react'
import SearchSection from './components/SearchSection/SearchSection'
import PopularCategories from './components/PopularCategories/PopularCategories'
import JobHuntResume from './components/JobHuntResume/JobHuntResume'

const HomePage = () => {
    return (
        <div>
                <SearchSection />
                <PopularCategories />
                <JobHuntResume />
        </div>
    )
}
export { HomePage }