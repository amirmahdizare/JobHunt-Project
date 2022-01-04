import { Box, Button, Divider, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Jh_BigJobCard from '../../../components/Jh_BigJobCard'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useGetAllJobs } from '../../../hooks/useGetAllJobs'
import { connect } from 'react-redux'
import { getJobs } from '../../../Store/Actions/jobAction'

const Jobs = ({ JobReducer, getJobs }) => {
    const [numberOfRecords, setNumberOfRecords] = useState(10);

    useEffect(() => {
        getJobs(1, 10)
    }, []);

    return (
        <Box my={2} >
            <Typography variant="h5">{JobReducer?.jobs?.number_of_entities} Jobs & Vacancies</Typography>
            <Box mx={-2} my={2} >
                {/* <Divider light variant="fullWidth"/> */}
                {JobReducer?.jobs?.entities?.map((item, index) => {
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

const mapStateToProps = state => {
    return {
        JobReducer: state.JobReducer
    };
};
export default connect(mapStateToProps, { getJobs })(Jobs);
