import { Box, CircularProgress, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { getTopJobs } from '../../../../../api/public/index.js'
import Jh_JobCard from '../../../../../components/Jh_JobCard.js'
import JobCardSkeleton from '../../../../../components/JobCardSkeleton.js'
import { useGetData } from '../../../../../hooks/useGetData.js'
const useClasses = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(5),
        width: '100%'
        ,
        '& .MuiCard-root:not(:last-child)': {
            borderBottom: '1px solid #e2e2e2'
        }
    }

}))
const JobsContainer = () => {
    const classes = useClasses()
    const [data, error, loading] = useGetData(getTopJobs)

    return (
        <Box className={classes.root}>
            {/* {loading && <CircularProgress/>} */}
            {!loading && data ? data.map((job) => <Jh_JobCard {...job} />): null}
            {loading && [0,1,2,3,4,5].map(e=> <JobCardSkeleton key={e}/>)}
            {!loading && !data && <Typography>There is no current Job Offer</Typography>}

        </Box>
    )
}
export default JobsContainer