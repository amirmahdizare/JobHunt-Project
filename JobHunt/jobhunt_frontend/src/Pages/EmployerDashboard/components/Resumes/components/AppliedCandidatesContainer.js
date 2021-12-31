import { Box, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { getSentResumes } from '../../../../../api/employer'
import { Jh_Pagination } from '../../../../../components/Jh_Pagination'
import { useGetData } from '../../../../../hooks/useGetData'
import { AppliedCandidate } from './AppliedCandidate'
import { AppliedCandidateCard } from './AppliedCandidateCard'
import { AppliedCandidateSkeletonCard } from './AppliedCandidateSkeletonCard'

export const AppliedCandidatesContainer = ({ jobOfferId }) => {
    const [page, setPage] = useState(1)

    const [candiadates, error, loading, refresh] = useGetData(getSentResumes, { pagination_size: 5, page: jobOfferId?.[0], job_offer_id: jobOfferId })
    const { entities = [], number_of_pages = 0 } = candiadates || {}
   
    const handleChange = (event, value) => setPage(value)

    useEffect(() => refresh(), [jobOfferId])

    return (
        <Box m={2}>
            {!loading && entities && entities.map(apply => <AppliedCandidateCard {...apply} key={apply.id} />)}
            {loading && [0, 1, 2, 3, 5].map((e) => <AppliedCandidateSkeletonCard key={e} />)}
            {jobOfferId && entities?.length == 0 && <Alert severity='info' variant='filled'>There is No Apply for this Job Offer</Alert>}
            {number_of_pages > 1 && <Jh_Pagination page={page} handleChange={handleChange} pages={number_of_pages} />}
        </Box>
    )
}
