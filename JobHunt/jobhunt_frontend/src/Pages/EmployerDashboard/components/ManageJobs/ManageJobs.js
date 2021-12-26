import React  from 'react'
import { Box } from '@material-ui/core'
import { SectionHeader } from '../../../../components/SectionHeader'
import { JobsTable } from './components/JobsTable'

export const ManageJobs = () => {
    return (
        <Box >
            <SectionHeader title="Manage Jobs" />
            <Box pl={2}>
                <JobsTable  />
            </Box>
        </Box>
    )
}
