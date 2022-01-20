import { Box, Button, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import Jh_BigJobCard from '../../../components/Jh_BigJobCard'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { connect } from 'react-redux'
import { getJobs, nextPage } from '../../../Store/Actions/jobAction'

const Jobs = ({ JobReducer, getJobs, nextPage }) => {

    useEffect(() => {
        getJobs()
    }, []);

    return (
        <Box my={2} >
            <Typography variant="h5">{JobReducer?.numberOfEntities} Jobs & Vacancies</Typography>
            <Box mx={-2} my={2} >
                {JobReducer?.jobs?.map((item, index) => {
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

                <Button startIcon={<MoreHorizIcon color="action" />} onClick={nextPage} variant="outlined" color="default">View More</Button>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => {
    return {
        JobReducer: state.JobReducer
    };
};
export default connect(mapStateToProps, { getJobs, nextPage })(Jobs);
