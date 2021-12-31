import { Box } from '@material-ui/core'
import React from 'react'
import { DashboardSectionHeader } from '../DashboardSectionHeader'
import { Jh_TimeLineStepper } from '../../../../../../components/Jh_TimelineStepper/Jh_TimelineStepper'
export const CertificatesSection = () => {
    return (
        <Box>
            <DashboardSectionHeader
                title="Certificate"
                itemToAdd="Certificate"
                addItemCallback={undefined} />
            <Jh_TimeLineStepper
                items={[
                    {
                        title: "Perfect Attendance Programs",
                        duration: "2008 - 2012",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    },
                    {
                        title: "Top Performer Recognition",
                        duration: "2008 - 2012",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    }, {
                        title: "King LLC",
                        duration: "2008 - 2012",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus." 
                }
                ]} />
        </Box>
    )
}
