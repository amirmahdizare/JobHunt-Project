import {  Box } from '@material-ui/core'
import React from 'react'
import { EducationDegree } from './components/EducationDegree'
import { DashboardSectionHeader } from '../DashboardSectionHeader'
export const Education = () => {
    return (
        <Box >
            <DashboardSectionHeader
            title="Education"
            itemToAdd="Education"
            addItemCallback={null}/>
            <EducationDegree
                grade="University"
                duration="2008 - 2012"
                institution="Middle East Technical University"
                field="Computer Science"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
            />
            <EducationDegree
                grade="High School"
                duration="2008 - 2012"
                institution="Tomms College"
                field="Bachlors in Fine Arts"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
            />

        </Box>
    )
}
