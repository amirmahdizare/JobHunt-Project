import React from 'react'
import SearchSection from './components/SearchSection/SearchSection'
import PopularCategories from './components/PopularCategories/PopularCategories'
const HomePage = () => {
    return (
        <div>
            <SearchSection/>
            <PopularCategories/>
        </div>
    )
}
export {HomePage}