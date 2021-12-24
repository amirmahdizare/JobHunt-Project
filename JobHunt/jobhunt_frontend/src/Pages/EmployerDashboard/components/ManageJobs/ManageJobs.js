import React from 'react'
import { Box } from '@material-ui/core'
import { SectionHeader } from '../../../../components/SectionHeader'
import { JobsTable } from './components/JobsTable'
import { Header } from './components/Header'

export const ManageJobs = (props) => {
    return (
        <Box >
            <SectionHeader title="Manage Jobs" />
            <Box pl={2}>
                <Header />
                <JobsTable />
            </Box>
        </Box>
    )
}
