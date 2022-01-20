import { useState } from "react"

const useFilter = () => {
    const [filter, setFilter] = useState({})
    const addFilter = (filterName , newFilterObj) => {
        setFilter({...filter,[filterName]:newFilterObj})

        
    }
    const clearFilter = (filterName) => {
        var filters = filter
        if(filters[filterName])
            setFilter({...filters,[filterName]:{}} )
        
     } 

    return [Object.values(filter) || {}, addFilter, clearFilter]
}

export { useFilter }