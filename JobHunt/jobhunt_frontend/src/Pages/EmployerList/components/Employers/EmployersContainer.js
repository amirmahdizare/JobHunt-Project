import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getCompanies } from '../../../../api/public'
import { useGetData } from '../../../../hooks/useGetData'
import { EmployerCard } from './components/EmployerCard'
import { Jh_Pagination } from '../../../../components/Jh_Pagination.js'
import { EmployerSkeletonCard } from './components/EmployerSkeletonCard'
export const EmployersContainer = ({ filter }) => {

    const [page, setPage] = useState(1)
    const [data, error, loading, refreshData] = useGetData(getCompanies, { data: filter, page: 1, pagination_size: 10 })
    const { number_of_pages = 0, entities } = data || {}
    
    useEffect(() => refreshData, [filter])
    
    const handleChange = (event, value) => setPage(value)
    return (
        <Box mt={3}>
            {!loading && entities && entities.map(emp =>
                <EmployerCard
                    location={emp.address}
                    key={emp.id}
                    {...emp}
                />
            )}

            {loading && '1234567891'.split('').map((r) => <EmployerSkeletonCard key={r} />)}

            {/* <EmployerCard
                logo="https://creativelayers.net/themes/jobhunt-html/images/resource/em2.jpg"
                numberOfOpenPositions={4}
                name="Telimed"
                category="Accounting Assistant, Arts, Design, and Media"
                location=" Toronto, Ontario"
            description="The Heavy Equipment / Grader Operator is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…" />*/}

            {number_of_pages > 1 && <Jh_Pagination pages={number_of_pages} page={page} handleChange={handleChange}/>}
        </Box>
    )
}
