import { Box, LinearProgress } from '@material-ui/core'
import React from 'react'
import { DashboardSectionHeader } from '../DashboardSectionHeader'
import { SkillStatus } from './components/SkillStatus'

export const ProfessionalSkills = () => {
    return (
        <Box >
            <DashboardSectionHeader
                title="Professional Skills"
                itemToAdd="Skills"
                addItemCallback={undefined} />
            <SkillStatus
                skill="Production In Html"
                skillPercent={60} />
            <SkillStatus
                skill="Adobe Photoshop"
                skillPercent={90} />
            <SkillStatus
                skill="Graphic Design"
                skillPercent={75} />
        </Box>
    )
}
