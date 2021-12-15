import { Box, Button, Divider, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Jh_BigJobCard from '../../../components/Jh_BigJobCard'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useGetAllJobs } from '../../../hooks/useGetAllJobs'

export const Jobs = () => {
    const [numberOfRecords, setNumberOfRecords] = useState(10);
    const { entities, number_of_entities } = useGetAllJobs(1, 30)
    return (
        <Box my={2} >
            <Typography variant="h5">{number_of_entities} Jobs & Vacancies</Typography>
            <Box mx={-2} my={2} >
                {/* <Divider light variant="fullWidth"/> */}
                {entities?.map((item, index) => {
                    return (
                        <Jh_BigJobCard
                            job={item}
                            workTime="FULL TIME"
                            hideDetail={false}
                        />
                    )
                })}
            </Box>
            <Box display="flex" justifyContent="center">

                <Button startIcon={<MoreHorizIcon color="action" />} onClick={() => setNumberOfRecords(numberOfRecords + 10)} variant="outlined" color="default">View More</Button>
            </Box>
        </Box>
    )
}
