import React, { useEffect, useState } from 'react'

import { Box, Grid } from '@material-ui/core'
import { getCompanies } from '../../../../api/public'
import { useGetData } from '../../../../hooks/useGetData'
import { EmployerCard } from './components/EmployerCard'
import { Jh_Pagination } from '../../../../components/Jh_Pagination.js'
import { EmployerSkeletonCard } from './components/EmployerSkeletonCard'
import { NumberOfEmployers } from './components/NumberOfEmployers'
import { PaginationSize } from './components/PaginationSize'
export const EmployersContainer = ({ filter }) => {

    const [page, setPage] = useState(1)
    const [pagination_size, setPagination_size] = useState(10)
    const [data, , loading, refreshData] = useGetData(getCompanies, { filter, page: 1, pagination_size })
    const { number_of_pages = 0, entities, number_of_entities } = data || {}
    
    useEffect(() => refreshData(), [filter])

    const handleChange = (event, value) => setPage(value)
    return (
        <Box mt={3}>

            <Grid container alignItems='center'>
                <NumberOfEmployers loading={loading} number_of_entities={number_of_entities} />
                {!loading && number_of_entities > 10 && <PaginationSize pagination_size={pagination_size} handleChange={setPagination_size} />}
            </Grid>

            {!loading && entities && entities.map(emp =>
                <EmployerCard
                    location={emp.address}
                    key={emp.id}
                    {...emp}
                />
            )}

            {loading && 'abcdefgjiz'.split('').map((r) => <EmployerSkeletonCard key={r} />)}

            {number_of_pages > 1 && <Jh_Pagination pages={number_of_pages} page={page} handleChange={handleChange} />}
        </Box>
    )
}
