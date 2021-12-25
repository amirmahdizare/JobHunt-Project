import React, { useState } from 'react'
import { Box, Button } from '@material-ui/core'
import { SectionHeader } from '../../../../components/SectionHeader'
import { JobsTable } from './components/JobsTable'
import { Header } from './components/Header'

export const ManageJobs = () => {
    const [refresh,setRefresh]=useState(false)
    console.log("RErender")
    return (
        <Box >
            <SectionHeader title="Manage Jobs" />
            <Box pl={2}>
                {/* <Button onClick={()=> setRefresh(!refresh)}>refresh</Button> */}
                {/* <Header refresh={refresh} /> */}
                <JobsTable refresh onRefresh = {() => setRefresh(!refresh)} />
            </Box>
        </Box>
    )
}
