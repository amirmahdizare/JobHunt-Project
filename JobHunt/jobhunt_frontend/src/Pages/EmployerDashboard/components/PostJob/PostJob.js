import React, { useMemo } from 'react'

import { usePostJobData } from './hooks/usePostJobData'
import { useSteps } from './hooks/useSteps'
import { useError } from './hooks/useError'


import { SectionHeader } from '../../../../components/SectionHeader'
import { PostJobStepper } from './components/PostJobStepper/PostJobStepper'
import { JobInformation } from './components/JobInformation/JobInformation'

import { Box } from '@material-ui/core'

export const PostJob = () => {
    const [info, handleChange] = usePostJobData()
    const [error,setError]=useError()
    const [activeStep, handleNext, handleBack,loading] = useSteps(info,setError)

    const stepContent = useMemo(() => {
        switch (activeStep) {
            case 0:
                return <JobInformation info={info} error={error}  handleChange={handleChange} />;
            case 1:
                return "Packages Not Found"
            default: return null
        }
    })

    return (
        <Box>
            <SectionHeader title="Post A Job" />
            <PostJobStepper
                activeStep={activeStep}
                handleNext={handleNext}
                handleBack={handleBack}
                loading={loading}
                >
                {stepContent}
            </PostJobStepper>

        </Box>
    )
}
