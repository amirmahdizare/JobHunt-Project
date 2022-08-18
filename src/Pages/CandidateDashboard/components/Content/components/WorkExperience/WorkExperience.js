import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { DashboardSectionHeader } from '../DashboardSectionHeader'
import { Jh_TimeLineStepper } from '../../../../../../components/Jh_TimelineStepper/Jh_TimelineStepper'
const useClasses = makeStyles(theme => ({
    root: {
        '& .experience:not(:last-child):before': {
            position: 'absolute',
            left: '27px',
            backgroundColor: theme.palette.primary.main,
            content: '""',
            width: '2px',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden'
        }
    }
}))
export const WorkExperience = () => {
    const classes = useClasses()
    return (
        <Box className={classes.root}>
            <DashboardSectionHeader
                title="Work Experience"
                itemToAdd="Experience"
                addItemCallback={null} />
            <Jh_TimeLineStepper
                items={[
                    {
                        title: "Web Designer",
                        secondTitle:"Inwave Studio",
                        duration: "2008 - 2012",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    },
                    {
                        title: "CEO Founder",
                        secondTitle:"Inwave Studio",
                        duration: "2008 - 2012",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    }, 
                ]} />

        </Box>
    )
}
