import React from 'react'

import { Box, MenuItem, TextField } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import moment from 'moment'

import { getCompanyAllJobs } from '../../../../../api/employer'
import { SectionLoading } from '../../../../../components/SectionLoading'
import { useGetData } from '../../../../../hooks/useGetData'

export const AppliedCandidate = ({jobOfferId, setJobOfferId }) => {

    const [jobsDetail, error, loading] = useGetData(getCompanyAllJobs)

    return (
        <Box m={2}>
            {loading && <SectionLoading title={'Loading Job Offers'} />}
            {!loading && jobsDetail?.entities && <TextField
                select
                variant="outlined"
                value={jobOfferId || 'unset'}
                onChange={(e) => setJobOfferId(e.target.value)}
                fullWidth
            >
                <MenuItem value="unset" disabled className='placeholder'>Select Job Offer</MenuItem>
                {jobsDetail?.entities && jobsDetail?.entities.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.title}&nbsp;/&nbsp;{option?.category?.title}&nbsp;/&nbsp;{option?.created_at && moment(option?.created_at).format("MMM D , YYYY")}
                    </MenuItem>
                ))}
            </TextField>}
            {!loading && jobsDetail?.entities?.length==0 && <Alert severity='info' variant='filled'>You Did not have Job Offer</Alert>}

        </Box>
    )
}
