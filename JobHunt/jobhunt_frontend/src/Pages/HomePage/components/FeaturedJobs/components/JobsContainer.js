import { Box, CircularProgress, makeStyles } from '@material-ui/core'
import React from 'react'
import { getTopJobs } from '../../../../../api/public/index.js'
import Jh_JobCard from '../../../../../components/Jh_JobCard.js'
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
            {loading && <CircularProgress/>}
            {!loading && data ? data.map((job) =>

                <Jh_JobCard
                    key={job.id}
                    jobTitle={job.title}
                    companyName={job.company_name}
                    companyLocation={job.city_id}
                    workTime={job.cooperation_kind_title}
                    workTimeColor={job.cooperation_kind_color}
                    companyLogo={job.company_logo}
                />


            ): null}

        </Box>
    )
}
export default JobsContainer