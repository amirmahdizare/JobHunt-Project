import React from 'react'

import { usePostJobData } from './hooks/usePostJobData'
import { useEmployerActivePackage } from '../../../../hooks/useEmployerActivePackage'

import { SectionHeader } from '../../../../components/SectionHeader'
import { JobInformation } from './components/JobInformation/JobInformation'
import { PackageLess } from './components/PackageLess'
import { Box } from '@material-ui/core'


export const PostJob = () => {

    const [info, handleChange, postJob, postJobStatus] = usePostJobData()
    const [packageInfo,error, loading] = useEmployerActivePackage()

    return (
        <Box boxSizing={'border-box'}>
            <SectionHeader title="Post A Job" />
            {
                (postJobStatus.status != 'success' || packageInfo?.rules?.job_posting_limit > 0)
                    ? 
                        <JobInformation
                            info={info}
                            postJob={postJob}
                            handleChange={handleChange}
                            postJobStatus={postJobStatus}
                            mode={'add'}
                        />
                    : <PackageLess packageInfo={packageInfo} loading={loading} />
            }
        </Box>
    )
}
